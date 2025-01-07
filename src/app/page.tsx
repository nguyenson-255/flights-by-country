'use client'

import { log } from "console";
import { useEffect, useState } from "react"

export default function Home() {

  const [data,setData] = useState(null);

  useEffect(() => {
    fetchData();
  },[]);

  useEffect(() => {
      console.log(data);
  },[data]);

  const fetchData = async () =>  {
    try {
      const response = await fetch("https://api.flightapi.io/schedule/677d155b3a45b414acd274f7?mode=arrivals&iata=SIN&day=1");

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      setData(result);

      console.log(data);
      
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <h1 className="bg-blue-700 underline">
      ddd
    </h1>
  )
}



