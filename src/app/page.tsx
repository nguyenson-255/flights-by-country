'use client'

import { useEffect, useState } from "react";
import { json } from "./json";
import Loading from "@/app/component/Loading";

export default function Home() {

  const [data, setData] = useState([{ id: 0, country: '', numberFlight: 0 }]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [destination, setDestination] = useState('');

  useEffect(() => {
    setData([]);
    setCount(0);
  }, [])

  const fetchData = async (code: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.flightapi.io/schedule/677df99369603e14ef2fba94?mode=arrivals&iata=${code}&day=1`);

      if (!response.ok) {
        setIsLoading(false);
        window.alert(`HTTP error! Status: ${response.status}`);
        return;
      }

      const result = await response.json();

      const dataResult = result.airport.pluginData.schedule.arrivals.data;
      var dataRaw: any[] = [];

      dataResult.forEach((element: any) => {

        const country = element.flight.airport.origin.position.country;

        const exists = dataRaw.some(item => item.id === country.id);

        if (exists) {
          dataRaw = dataRaw.map(item => {
            if (item.id === country.id) {
              return { ...item, numberFlight: item.numberFlight + 1 };
            }
            return item;
          });
        } else {
          dataRaw = [...dataRaw, { id: country.id, country: country.name, numberFlight: 1 }];
        }
      });

      setData(dataRaw.sort((a, b) => b.numberFlight - a.numberFlight));
      setCount(dataRaw.length);
      setDestination(result.airport.pluginData.details.name);
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      window.alert("There was a problem with the fetch operation")
    }
  };

  const fetDataLocal = () => {

    setIsLoading(true);

    const dataResult = json.airport.pluginData.schedule.arrivals.data;
    var dataRaw: any[] = [];

    dataResult.forEach((element: any) => {

      const country = element.flight.airport.origin.position.country;

      const exists = dataRaw.some(item => item.id === country.id);

      if (exists) {
        dataRaw = dataRaw.map(item => {
          if (item.id === country.id) {
            return { ...item, numberFlight: item.numberFlight + 1 };
          }
          return item;
        });
      } else {
        dataRaw = [...dataRaw, { id: country.id, country: country.name, numberFlight: 1 }];
      }
    });

    setData(dataRaw.sort((a, b) => b.numberFlight - a.numberFlight));
    setCount(dataRaw.length);
    setDestination(json.airport.pluginData.details.name);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  const handelSearch = async () => {
    fetchData(document.getElementById("default-search")?.value);
    // fetDataLocal();
  }

  return (
    <div>
      <div className="py-8 px-4 mx-auto max-w-md text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Flights by Country
        </h1>
      </div>
      <div className="mx-auto max-w-md">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Code..." required />

          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handelSearch}>Search</button>
        </div>
      </div>
      {isLoading ? (
      <div className="mx-auto max-w-2xl px-16 py-16 sm:px-16 sm:py-16 lg:max-w-7xl lg:px-8 flex justify-center">
        <Loading />
      </div>
      ) : (
      <>
        <div className="relative overflow-x-auto">
          <div className="mx-auto max-w-2xl px-4 py-4 sm:px-4 sm:py-4 lg:max-w-7xl lg:px-8">
            <div className="mx-auto max-w-2xl px-4 py-4 lg:max-w-7xl flex flex-col gap-4">
              <label className="uppercase text-xs text-gray-700" htmlFor="table">{count} coutries</label>
              <p className="text-xl text-black">Table for {destination}:</p>
            </div>
            <table id={"table"} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Country</th>
                  <th scope="col" className="px-6 py-3"># of Flights</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.country}
                    </th>
                    <td className="px-6 py-4">{item.numberFlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div></>
      )}
    </div>
  )
}