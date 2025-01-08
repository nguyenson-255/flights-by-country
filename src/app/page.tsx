'use client'

import { useEffect, useState } from "react"

export default function Home() {

  let json = {
    "airport": {
      "pluginData": {
        "details": {
          "name": "Singapore Changi Airport",
          "code": {
            "iata": "SIN",
            "icao": "WSSS"
          },
          "delayIndex": {
            "arrivals": 0.42,
            "departures": 1.75
          },
          "stats": {
            "arrivals": {
              "delayIndex": 0.42,
              "delayAvg": 5,
              "percentage": {
                "delayed": 0.17,
                "canceled": 0,
                "trend": "down"
              },
              "recent": {
                "delayIndex": 0.42,
                "delayAvg": 5,
                "percentage": {
                  "delayed": 0.17,
                  "canceled": 0,
                  "trend": "down"
                },
                "quantity": {
                  "onTime": 38,
                  "delayed": 8,
                  "canceled": 0
                }
              },
              "today": {
                "percentage": {
                  "delayed": 0.16,
                  "canceled": 0
                },
                "quantity": {
                  "onTime": 379,
                  "delayed": 85,
                  "canceled": 0
                }
              },
              "yesterday": {
                "percentage": {
                  "delayed": 0.2,
                  "canceled": 0
                },
                "quantity": {
                  "onTime": 412,
                  "delayed": 105,
                  "canceled": 0
                }
              },
              "tomorrow": {
                "percentage": {
                  "canceled": 0
                },
                "quantity": {
                  "canceled": 2
                }
              }
            },
            "departures": {
              "delayIndex": 1.75,
              "delayAvg": 21,
              "percentage": {
                "delayed": 0.7,
                "canceled": 0,
                "trend": "down"
              },
              "recent": {
                "delayIndex": 1.75,
                "delayAvg": 21,
                "percentage": {
                  "delayed": 0.7,
                  "canceled": 0,
                  "trend": "down"
                },
                "quantity": {
                  "onTime": 13,
                  "delayed": 31,
                  "canceled": 0
                }
              },
              "today": {
                "percentage": {
                  "delayed": 0.63,
                  "canceled": 0
                },
                "quantity": {
                  "onTime": 140,
                  "delayed": 326,
                  "canceled": 0
                }
              },
              "yesterday": {
                "percentage": {
                  "delayed": 0.74,
                  "canceled": 0
                },
                "quantity": {
                  "onTime": 130,
                  "delayed": 382,
                  "canceled": 1
                }
              },
              "tomorrow": {
                "percentage": {
                  "canceled": 0
                },
                "quantity": {
                  "canceled": 1
                }
              }
            }
          },
          "position": {
            "latitude": 1.350189,
            "longitude": 103.9944,
            "elevation": 22,
            "country": {
              "name": "Singapore",
              "code": "SG",
              "id": 199
            },
            "region": {
              "city": "Singapore"
            }
          },
          "timezone": {
            "name": "Asia/Singapore",
            "offset": 28800,
            "abbr": "+08",
            "abbrName": null,
            "isDst": false
          },
          "url": {
            "homepage": "http://www.changiairport.com/",
            "webcam": null,
            "wikipedia": "https://en.wikipedia.org/wiki/Singapore_Changi_Airport"
          },
          "airportImages": {
            "thumbnails": [
              {
                "src": "https://cdn.jetphotos.com/200/5/1006563_1726742873_tb.jpg",
                "link": "https://www.jetphotos.com/photo/11483474",
                "copyright": "Frederick Lee ",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/200/6/1141938_1728569879_tb.jpg",
                "link": "https://www.jetphotos.com/photo/11504871",
                "copyright": "_SAMWANG",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/200/5/1063377_1725364652_tb.jpg",
                "link": "https://www.jetphotos.com/photo/11464770",
                "copyright": "Andre Giam",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/200/5/1497697_1713000956_tb.jpg",
                "link": "https://www.jetphotos.com/photo/11315199",
                "copyright": "Spotter_DF767",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/200/6/2483815_1700821066_tb.jpg",
                "link": "https://www.jetphotos.com/photo/11163062",
                "copyright": "Florian Venus",
                "source": "Jetphotos.com"
              }
            ],
            "medium": [
              {
                "src": "https://cdn.jetphotos.com/400/5/1006563_1726742873.jpg",
                "link": "https://www.jetphotos.com/photo/11483474",
                "copyright": "Frederick Lee ",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/400/6/1141938_1728569879.jpg",
                "link": "https://www.jetphotos.com/photo/11504871",
                "copyright": "_SAMWANG",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/400/5/1063377_1725364652.jpg",
                "link": "https://www.jetphotos.com/photo/11464770",
                "copyright": "Andre Giam",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/400/5/1497697_1713000956.jpg",
                "link": "https://www.jetphotos.com/photo/11315199",
                "copyright": "Spotter_DF767",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/400/6/2483815_1700821066.jpg",
                "link": "https://www.jetphotos.com/photo/11163062",
                "copyright": "Florian Venus",
                "source": "Jetphotos.com"
              }
            ],
            "large": [
              {
                "src": "https://cdn.jetphotos.com/640cb/5/1006563_1726742873.jpg",
                "link": "https://www.jetphotos.com/photo/11483474",
                "copyright": "Frederick Lee ",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/640cb/6/1141938_1728569879.jpg",
                "link": "https://www.jetphotos.com/photo/11504871",
                "copyright": "_SAMWANG",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/640cb/5/1063377_1725364652.jpg",
                "link": "https://www.jetphotos.com/photo/11464770",
                "copyright": "Andre Giam",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/640cb/5/1497697_1713000956.jpg",
                "link": "https://www.jetphotos.com/photo/11315199",
                "copyright": "Spotter_DF767",
                "source": "Jetphotos.com"
              },
              {
                "src": "https://cdn.jetphotos.com/640cb/6/2483815_1700821066.jpg",
                "link": "https://www.jetphotos.com/photo/11163062",
                "copyright": "Florian Venus",
                "source": "Jetphotos.com"
              }
            ]
          },
          "visible": true
        },
        "flightdiary": {
          "url": "/data/airports/sin/reviews",
          "ratings": {
            "avg": 4.76,
            "total": 11999
          },
          "comment": [
            {
              "content": "am familiar because I live in Singapore and I really recommend it though on this flight I did not use the lounge because I was economy but the lounge is good nontheless and security check is at the gate not right after immigration.\r\n",
              "author": {
                "facebookId": null,
                "name": "tan_shao_yu"
              },
              "timestamp": 1735525789
            }
          ],
          "reviews": 408,
          "evaluation": 95
        },
        "schedule": {
          "arrivals": {
            "item": {
              "current": 100,
              "total": 728,
              "limit": 100
            },
            "page": {
              "current": 1,
              "total": 8
            },
            "timestamp": 1736260980,
            "data": [
              {
                "flight": {
                  "identification": {
                    "id": "38a128ec",
                    "row": 5608638011,
                    "number": {
                      "default": "SQ921",
                      "alternative": null
                    },
                    "callsign": "SIA921",
                    "codeshare": [
                      "LH7223",
                      "LX9073",
                      "NZ3441",
                      "PR3857"
                    ]
                  },
                  "status": {
                    "live": false,
                    "text": "Landed 22:29",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "landed",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736260147,
                        "local": 1736288947
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B78X",
                      "text": "Boeing 787-10 Dreamliner"
                    },
                    "registration": "9V-SCK",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CC6B",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MNL",
                        "icao": "RPLL"
                      },
                      "timezone": {
                        "name": "Asia/Manila",
                        "offset": 28800,
                        "abbr": "PST",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Manila Ninoy Aquino International Airport",
                      "position": {
                        "latitude": 14.50864,
                        "longitude": 121.019501,
                        "country": {
                          "name": "Philippines",
                          "code": "PH",
                          "id": 174
                        },
                        "region": {
                          "city": "Manila"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "37",
                        "gate": "E27"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736247600,
                      "arrival": 1736261100
                    },
                    "real": {
                      "departure": 1736249015,
                      "arrival": 1736260147
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": 1736260147,
                      "duration": 11160
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a185c9",
                    "row": 5608638192,
                    "number": {
                      "default": "SQ995",
                      "alternative": null
                    },
                    "callsign": "SIA995",
                    "codeshare": [
                      "AI8183",
                      "GA9911",
                      "LH7239",
                      "LX9009"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 22:45",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736261125,
                        "local": 1736289925
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B38M",
                      "text": "Boeing 737 MAX 8"
                    },
                    "registration": "9V-MBH",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76B448",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KNO",
                        "icao": "WIMM"
                      },
                      "timezone": {
                        "name": "Asia/Jakarta",
                        "offset": 25200,
                        "abbr": "WIB",
                        "abbrName": "Western Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Medan Kuala Namu International Airport",
                      "position": {
                        "latitude": 3.640252,
                        "longitude": 98.872971,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Medan"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "45",
                        "gate": "A19"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736255700,
                      "arrival": 1736261100
                    },
                    "real": {
                      "departure": 1736257061,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736261125
                    },
                    "other": {
                      "eta": 1736261125,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608638336,
                    "number": {
                      "default": "SQ7863",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "74Y",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKG",
                        "icao": "VHHH"
                      },
                      "timezone": {
                        "name": "Asia/Hong_Kong",
                        "offset": 28800,
                        "abbr": "HKT",
                        "abbrName": "Hong Kong Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Hong Kong International Airport",
                      "position": {
                        "latitude": 22.309616,
                        "longitude": 113.916237,
                        "country": {
                          "name": "Hong Kong",
                          "code": "HK",
                          "id": 99
                        },
                        "region": {
                          "city": "Hong Kong"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736248200,
                      "arrival": 1736261100
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a103b4",
                    "row": 5608637933,
                    "number": {
                      "default": "SQ843",
                      "alternative": null
                    },
                    "callsign": "SIA843",
                    "codeshare": [
                      "CA5291"
                    ]
                  },
                  "status": {
                    "live": false,
                    "text": "Landed 22:23",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "landed",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736259812,
                        "local": 1736288612
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B38M",
                      "text": "Boeing 737 MAX 8"
                    },
                    "registration": "9V-MBF",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76B446",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TFU",
                        "icao": "ZUTF"
                      },
                      "timezone": {
                        "name": "Asia/Chongqing",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "109"
                      },
                      "name": "Chengdu Tianfu International Airport",
                      "position": {
                        "latitude": 30.319,
                        "longitude": 104.445,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Chengdu"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "41",
                        "gate": "A9"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736242500,
                      "arrival": 1736261400
                    },
                    "real": {
                      "departure": 1736243000,
                      "arrival": 1736259812
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": 1736259812,
                      "duration": 16800
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1221a",
                    "row": 5608637983,
                    "number": {
                      "default": "SQ895",
                      "alternative": null
                    },
                    "callsign": "SIA895",
                    "codeshare": [
                      "AC5878",
                      "ET1322",
                      "VA5775"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Landed 22:40",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "landed",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736260858,
                        "local": 1736289658
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SHI",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD09",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKG",
                        "icao": "VHHH"
                      },
                      "timezone": {
                        "name": "Asia/Hong_Kong",
                        "offset": 28800,
                        "abbr": "HKT",
                        "abbrName": "Hong Kong Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "6"
                      },
                      "name": "Hong Kong International Airport",
                      "position": {
                        "latitude": 22.309616,
                        "longitude": 113.916237,
                        "country": {
                          "name": "Hong Kong",
                          "code": "HK",
                          "id": 99
                        },
                        "region": {
                          "city": "Hong Kong"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "31",
                        "gate": "E24"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736247000,
                      "arrival": 1736261400
                    },
                    "real": {
                      "departure": 1736248107,
                      "arrival": 1736260858
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": 1736260858,
                      "duration": 12780
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a11f49",
                    "row": 5608519268,
                    "number": {
                      "default": "CZ351",
                      "alternative": null
                    },
                    "callsign": "CSN351",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 22:44",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736261066,
                        "local": 1736289866
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B38M",
                      "text": "Boeing 737 MAX 8"
                    },
                    "registration": "B-1206",
                    "country": {
                      "id": 46,
                      "name": "China",
                      "alpha2": "CN",
                      "alpha3": "CHN"
                    },
                    "hex": "78130D",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "China Southern Airlines",
                    "code": {
                      "iata": "CZ",
                      "icao": "CSN"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/74.png"
                  },
                  "airline": {
                    "name": "China Southern Airlines",
                    "code": {
                      "iata": "CZ",
                      "icao": "CSN"
                    },
                    "short": "China Southern Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "CAN",
                        "icao": "ZGGG"
                      },
                      "timezone": {
                        "name": "Asia/Shanghai",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "P"
                      },
                      "name": "Guangzhou Baiyun International Airport",
                      "position": {
                        "latitude": 23.392429,
                        "longitude": 113.298698,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Guangzhou"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "13",
                        "gate": "C11"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736246700,
                      "arrival": 1736261700
                    },
                    "real": {
                      "departure": 1736247160,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736261066
                    },
                    "other": {
                      "eta": 1736261066,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a18823",
                    "row": 5608636626,
                    "number": {
                      "default": "SQ127",
                      "alternative": null
                    },
                    "callsign": "SIA127",
                    "codeshare": [
                      "AI8199",
                      "LH7247",
                      "MH5733",
                      "NZ3409",
                      "VA5447"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 22:53",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736261632,
                        "local": 1736290432
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B38M",
                      "text": "Boeing 737 MAX 8"
                    },
                    "registration": "9V-MBC",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76B443",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KUL",
                        "icao": "WMKK"
                      },
                      "timezone": {
                        "name": "Asia/Kuala_Lumpur",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "C13"
                      },
                      "name": "Kuala Lumpur International Airport",
                      "position": {
                        "latitude": 2.745578,
                        "longitude": 101.7099,
                        "country": {
                          "name": "Malaysia",
                          "code": "MY",
                          "id": 133
                        },
                        "region": {
                          "city": "Kuala Lumpur"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "38",
                        "gate": "F52"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736257500,
                      "arrival": 1736261700
                    },
                    "real": {
                      "departure": 1736258650,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736261632
                    },
                    "other": {
                      "eta": 1736261632,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1656c",
                    "row": 5608636930,
                    "number": {
                      "default": "SQ185",
                      "alternative": null
                    },
                    "callsign": "SIA185",
                    "codeshare": [
                      "AC5863",
                      "AI8257",
                      "ET1330",
                      "LH7211",
                      "LX9083",
                      "NZ3461",
                      "VA5495"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 22:44",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736261068,
                        "local": 1736289868
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B78X",
                      "text": "Boeing 787-10 Dreamliner"
                    },
                    "registration": "9V-SCN",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CC6E",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "SGN",
                        "icao": "VVTS"
                      },
                      "timezone": {
                        "name": "Asia/Ho_Chi_Minh",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Ho Chi Minh City International Airport",
                      "position": {
                        "latitude": 10.81879,
                        "longitude": 106.651802,
                        "country": {
                          "name": "Vietnam",
                          "code": "VN",
                          "id": 243
                        },
                        "region": {
                          "city": "Ho Chi Minh City"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "32",
                        "gate": "E12"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736254200,
                      "arrival": 1736261700
                    },
                    "real": {
                      "departure": 1736255051,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736261068
                    },
                    "other": {
                      "eta": 1736261068,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a14bdd",
                    "row": 5608638071,
                    "number": {
                      "default": "SQ945",
                      "alternative": null
                    },
                    "callsign": "SIA945",
                    "codeshare": [
                      "AI8147",
                      "GA9073",
                      "LH9793",
                      "LX9011",
                      "SK8014",
                      "UA7703"
                    ]
                  },
                  "status": {
                    "live": false,
                    "text": "Landed 22:32",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "landed",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736260351,
                        "local": 1736289151
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B78X",
                      "text": "Boeing 787-10 Dreamliner"
                    },
                    "registration": "9V-SCT",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CC74",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "DPS",
                        "icao": "WADD"
                      },
                      "timezone": {
                        "name": "Asia/Makassar",
                        "offset": 28800,
                        "abbr": "WITA",
                        "abbrName": "Central Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Denpasar Ngurah Rai International Airport",
                      "position": {
                        "latitude": -8.74816,
                        "longitude": 115.167099,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Denpasar"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "30",
                        "gate": "E28"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736252100,
                      "arrival": 1736261700
                    },
                    "real": {
                      "departure": 1736252346,
                      "arrival": 1736260351
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": 1736260351,
                      "duration": 7980
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a10142",
                    "row": 5608646300,
                    "number": {
                      "default": "TR9",
                      "alternative": null
                    },
                    "callsign": "TGW9",
                    "codeshare": [
                      "SQ8493"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 22:58",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736261884,
                        "local": 1736290684
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B788",
                      "text": "Boeing 787-8 Dreamliner"
                    },
                    "registration": "9V-OFD",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76BCC4",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PER",
                        "icao": "YPPH"
                      },
                      "timezone": {
                        "name": "Australia/Perth",
                        "offset": 28800,
                        "abbr": "AWST",
                        "abbrName": "Australian Western Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Perth Airport",
                      "position": {
                        "latitude": -31.940201,
                        "longitude": 115.966904,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Perth"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "10",
                        "gate": "C24"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736243400,
                      "arrival": 1736261700
                    },
                    "real": {
                      "departure": 1736244325,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736261884
                    },
                    "other": {
                      "eta": 1736261884,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a15e9c",
                    "row": 5608646362,
                    "number": {
                      "default": "TR263",
                      "alternative": null
                    },
                    "callsign": "TGW263",
                    "codeshare": [
                      "SQ8499"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 22:49",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736261387,
                        "local": 1736290187
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B788",
                      "text": "Boeing 787-8 Dreamliner"
                    },
                    "registration": "9V-OFN",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76BCCE",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "SUB",
                        "icao": "WARR"
                      },
                      "timezone": {
                        "name": "Asia/Jakarta",
                        "offset": 25200,
                        "abbr": "WIB",
                        "abbrName": "Western Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "4"
                      },
                      "name": "Surabaya Juanda International Airport",
                      "position": {
                        "latitude": -7.37983,
                        "longitude": 112.786797,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Surabaya"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "16",
                        "gate": "D44"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736253600,
                      "arrival": 1736262000
                    },
                    "real": {
                      "departure": 1736254625,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736261387
                    },
                    "other": {
                      "eta": 1736261387,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a18228",
                    "row": 5608646368,
                    "number": {
                      "default": "TR279",
                      "alternative": null
                    },
                    "callsign": "TGW279",
                    "codeshare": [
                      "SQ8593"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:08",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736262528,
                        "local": 1736291328
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A20N",
                      "text": "Airbus A320-271N"
                    },
                    "registration": "9V-TNF",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76D1C6",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "CGK",
                        "icao": "WIII"
                      },
                      "timezone": {
                        "name": "Asia/Jakarta",
                        "offset": 25200,
                        "abbr": "WIB",
                        "abbrName": "Western Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Jakarta Soekarno Hatta International Airport",
                      "position": {
                        "latitude": -6.12556,
                        "longitude": 106.6558,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Jakarta"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "12",
                        "gate": "C17"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736255700,
                      "arrival": 1736262000
                    },
                    "real": {
                      "departure": 1736257694,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736262528
                    },
                    "other": {
                      "eta": 1736262528,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a159f7",
                    "row": 5608636987,
                    "number": {
                      "default": "SQ193",
                      "alternative": null
                    },
                    "callsign": "SIA193",
                    "codeshare": [
                      "AC5892",
                      "AI8159",
                      "LX9087",
                      "NZ3217",
                      "VA5497"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 23:34",
                    "icon": "yellow",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "yellow",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736264064,
                        "local": 1736292864
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B38M",
                      "text": "Boeing 737 MAX 8"
                    },
                    "registration": "9V-MBD",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76B444",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HAN",
                        "icao": "VVNB"
                      },
                      "timezone": {
                        "name": "Asia/Ho_Chi_Minh",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Hanoi Noi Bai International Airport",
                      "position": {
                        "latitude": 21.221189,
                        "longitude": 105.807098,
                        "country": {
                          "name": "Vietnam",
                          "code": "VN",
                          "id": 243
                        },
                        "region": {
                          "city": "Hanoi"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "41",
                        "gate": "A21"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736249100,
                      "arrival": 1736262300
                    },
                    "real": {
                      "departure": 1736252863,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736264064
                    },
                    "other": {
                      "eta": 1736264064,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a16f6d",
                    "row": 5608637846,
                    "number": {
                      "default": "SQ739",
                      "alternative": null
                    },
                    "callsign": "SIA739",
                    "codeshare": [
                      "AC5860",
                      "NZ3495",
                      "PG4721",
                      "VA5737"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 22:57",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736261843,
                        "local": 1736290643
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B738",
                      "text": "Boeing 737-8SA"
                    },
                    "registration": "9V-MGM",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76B4ED",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKT",
                        "icao": "VTSP"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Phuket International Airport",
                      "position": {
                        "latitude": 8.1132,
                        "longitude": 98.316872,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Phuket"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "30",
                        "gate": "E7"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736255400,
                      "arrival": 1736262600
                    },
                    "real": {
                      "departure": 1736255889,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736261843
                    },
                    "other": {
                      "eta": 1736261843,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0ec38",
                    "row": 5608637896,
                    "number": {
                      "default": "SQ807",
                      "alternative": null
                    },
                    "callsign": "SIA807",
                    "codeshare": [
                      "CA5283",
                      "ET1339",
                      "VA5747"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 22:45",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736261156,
                        "local": 1736289956
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B77W",
                      "text": "Boeing 777-312(ER)"
                    },
                    "registration": "9V-SWY",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CEF9",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PEK",
                        "icao": "ZBAA"
                      },
                      "timezone": {
                        "name": "Asia/Shanghai",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "E11"
                      },
                      "name": "Beijing Capital International Airport",
                      "position": {
                        "latitude": 40.084152,
                        "longitude": 116.592735,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Beijing"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "43",
                        "gate": "A5"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736239200,
                      "arrival": 1736262600
                    },
                    "real": {
                      "departure": 1736240317,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736261156
                    },
                    "other": {
                      "eta": 1736261156,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0cf98",
                    "row": 5608681958,
                    "number": {
                      "default": "ZG53",
                      "alternative": null
                    },
                    "callsign": "TZP53",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:15",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736262912,
                        "local": 1736291712
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B788",
                      "text": "Boeing 787-8 Dreamliner"
                    },
                    "registration": "JA824J",
                    "country": {
                      "id": 111,
                      "name": "Japan",
                      "alpha2": "JP",
                      "alpha3": "JPN"
                    },
                    "hex": "86D602",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Zipair",
                    "code": {
                      "iata": "ZG",
                      "icao": "TZP"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/713.png"
                  },
                  "airline": {
                    "name": "Zipair",
                    "code": {
                      "iata": "ZG",
                      "icao": "TZP"
                    },
                    "short": "Zipair"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "NRT",
                        "icao": "RJAA"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "26"
                      },
                      "name": "Tokyo Narita International Airport",
                      "position": {
                        "latitude": 35.764721,
                        "longitude": 140.386307,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Tokyo"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "12",
                        "gate": "C1"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736235600,
                      "arrival": 1736262600
                    },
                    "real": {
                      "departure": 1736237139,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736262912
                    },
                    "other": {
                      "eta": 1736262912,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0c74d",
                    "row": 5608637724,
                    "number": {
                      "default": "SQ633",
                      "alternative": null
                    },
                    "callsign": "SIA633",
                    "codeshare": [
                      "AI8163",
                      "ET1341",
                      "FJ5964",
                      "NH6257"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:06",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736262376,
                        "local": 1736291176
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SHM",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD0D",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HND",
                        "icao": "RJTT"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "110"
                      },
                      "name": "Tokyo Haneda International Airport",
                      "position": {
                        "latitude": 35.55225,
                        "longitude": 139.779602,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Tokyo"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "39",
                        "gate": "F41"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736235600,
                      "arrival": 1736263200
                    },
                    "real": {
                      "departure": 1736236290,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736262376
                    },
                    "other": {
                      "eta": 1736262376,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a13f8f",
                    "row": 5608573574,
                    "number": {
                      "default": "IX682",
                      "alternative": null
                    },
                    "callsign": "AXB682",
                    "codeshare": [
                      "AI9225"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 23:49",
                    "icon": "yellow",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "yellow",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736264960,
                        "local": 1736293760
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B738",
                      "text": "Boeing 737-8HG"
                    },
                    "registration": "VT-AYD",
                    "country": {
                      "id": 102,
                      "name": "India",
                      "alpha2": "IN",
                      "alpha3": "IND"
                    },
                    "hex": "80044E",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Air India Express",
                    "code": {
                      "iata": "IX",
                      "icao": "AXB"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/449.png"
                  },
                  "airline": {
                    "name": "Air India Express (Nagaland Folk-Manipuri Dance)",
                    "code": {
                      "iata": "IX",
                      "icao": "AXB"
                    },
                    "short": "Air India Express"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TRZ",
                        "icao": "VOTR"
                      },
                      "timezone": {
                        "name": "Asia/Kolkata",
                        "offset": 19800,
                        "abbr": "IST",
                        "abbrName": "India Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Tiruchirappalli International Airport",
                      "position": {
                        "latitude": 10.76536,
                        "longitude": 78.709717,
                        "country": {
                          "name": "India",
                          "code": "IN",
                          "id": 102
                        },
                        "region": {
                          "city": "Tiruchirapalli"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "37",
                        "gate": "T2"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736247600,
                      "arrival": 1736263500
                    },
                    "real": {
                      "departure": 1736250934,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736264960
                    },
                    "other": {
                      "eta": 1736264960,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a17ce4",
                    "row": 5608646521,
                    "number": {
                      "default": "TR653",
                      "alternative": null
                    },
                    "callsign": "TGW653",
                    "codeshare": [
                      "SQ8571"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:10",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736262656,
                        "local": 1736291456
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A21N",
                      "text": "Airbus A321-271NX"
                    },
                    "registration": "9V-NCB",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76B862",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKT",
                        "icao": "VTSP"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Phuket International Airport",
                      "position": {
                        "latitude": 8.1132,
                        "longitude": 98.316872,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Phuket"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "11",
                        "gate": "C19"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736256600,
                      "arrival": 1736263500
                    },
                    "real": {
                      "departure": 1736257151,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736262656
                    },
                    "other": {
                      "eta": 1736262656,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0e387",
                    "row": 5609875562,
                    "number": {
                      "default": "7C4055",
                      "alternative": null
                    },
                    "callsign": "JJA4055",
                    "codeshare": [
                      "H19796"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:19",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736263168,
                        "local": 1736291968
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B738",
                      "text": "Boeing 737-8LC"
                    },
                    "registration": "HL8316",
                    "country": {
                      "id": 207,
                      "name": "South Korea",
                      "alpha2": "KR",
                      "alpha3": "KOR"
                    },
                    "hex": "71C316",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Jeju Air",
                    "code": {
                      "iata": "7C",
                      "icao": "JJA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/760.png"
                  },
                  "airline": {
                    "name": "Jeju Air",
                    "code": {
                      "iata": "7C",
                      "icao": "JJA"
                    },
                    "short": "Jeju Air"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PUS",
                        "icao": "RKPK"
                      },
                      "timezone": {
                        "name": "Asia/Seoul",
                        "offset": 32400,
                        "abbr": "KST",
                        "abbrName": "Korea Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": "4"
                      },
                      "name": "Busan Gimhae International Airport",
                      "position": {
                        "latitude": 35.17952,
                        "longitude": 128.938202,
                        "country": {
                          "name": "South Korea",
                          "code": "KR",
                          "id": 207
                        },
                        "region": {
                          "city": "Busan"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": "3",
                        "gate": "G13"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736239500,
                      "arrival": 1736263500
                    },
                    "real": {
                      "departure": 1736239562,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736263168
                    },
                    "other": {
                      "eta": 1736263168,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a17497",
                    "row": 5608637797,
                    "number": {
                      "default": "SQ713",
                      "alternative": null
                    },
                    "callsign": "SIA713",
                    "codeshare": [
                      "AC5856",
                      "LX9067",
                      "NZ3465",
                      "PG4709",
                      "SK8024",
                      "VA5723"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:30",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736263808,
                        "local": 1736292608
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B78X",
                      "text": "Boeing 787-10 Dreamliner"
                    },
                    "registration": "9V-SCS",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CC73",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BKK",
                        "icao": "VTBS"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Bangkok Suvarnabhumi Airport",
                      "position": {
                        "latitude": 13.6811,
                        "longitude": 100.7472,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Bangkok"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "18",
                        "gate": "D41"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736254800,
                      "arrival": 1736263800
                    },
                    "real": {
                      "departure": 1736256773,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736263808
                    },
                    "other": {
                      "eta": 1736263808,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a14c8c",
                    "row": 5608646407,
                    "number": {
                      "default": "TR391",
                      "alternative": null
                    },
                    "callsign": "TGW391",
                    "codeshare": [
                      "SQ8595"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:34",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736264064,
                        "local": 1736292864
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A21N",
                      "text": "Airbus A321-271NX"
                    },
                    "registration": "9V-NCJ",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76B86A",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MNL",
                        "icao": "RPLL"
                      },
                      "timezone": {
                        "name": "Asia/Manila",
                        "offset": 28800,
                        "abbr": "PST",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Manila Ninoy Aquino International Airport",
                      "position": {
                        "latitude": 14.50864,
                        "longitude": 121.019501,
                        "country": {
                          "name": "Philippines",
                          "code": "PH",
                          "id": 174
                        },
                        "region": {
                          "city": "Manila"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "16",
                        "gate": "D35"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736249400,
                      "arrival": 1736263800
                    },
                    "real": {
                      "departure": 1736252887,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736264064
                    },
                    "other": {
                      "eta": 1736264064,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1578c",
                    "row": 5608620761,
                    "number": {
                      "default": "PR509",
                      "alternative": null
                    },
                    "callsign": "PAL509",
                    "codeshare": [
                      "SQ5055"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 23:51",
                    "icon": "yellow",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "yellow",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736265088,
                        "local": 1736293888
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A321",
                      "text": "Airbus A321-231"
                    },
                    "registration": "RP-C9916",
                    "country": {
                      "id": 174,
                      "name": "Philippines",
                      "alpha2": "PH",
                      "alpha3": "PHL"
                    },
                    "hex": "75839F",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Philippine Airlines",
                    "code": {
                      "iata": "PR",
                      "icao": "PAL"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/98.png"
                  },
                  "airline": {
                    "name": "Philippine Airlines",
                    "code": {
                      "iata": "PR",
                      "icao": "PAL"
                    },
                    "short": "Philippine Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MNL",
                        "icao": "RPLL"
                      },
                      "timezone": {
                        "name": "Asia/Manila",
                        "offset": 28800,
                        "abbr": "PST",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Manila Ninoy Aquino International Airport",
                      "position": {
                        "latitude": 14.50864,
                        "longitude": 121.019501,
                        "country": {
                          "name": "Philippines",
                          "code": "PH",
                          "id": 174
                        },
                        "region": {
                          "city": "Manila"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "19",
                        "gate": "D42"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736250600,
                      "arrival": 1736264100
                    },
                    "real": {
                      "departure": 1736253637,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736265088
                    },
                    "other": {
                      "eta": 1736265088,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0f97f",
                    "row": 5608605763,
                    "number": {
                      "default": "MU5031",
                      "alternative": null
                    },
                    "callsign": "CES5031",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:23",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736263424,
                        "local": 1736292224
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A20N",
                      "text": "Airbus A320-251N"
                    },
                    "registration": "B-32DZ",
                    "country": {
                      "id": 46,
                      "name": "China",
                      "alpha2": "CN",
                      "alpha3": "CHN"
                    },
                    "hex": "781F44",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "China Eastern Airlines",
                    "code": {
                      "iata": "MU",
                      "icao": "CES"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/131.png"
                  },
                  "airline": {
                    "name": "China Eastern Airlines",
                    "code": {
                      "iata": "MU",
                      "icao": "CES"
                    },
                    "short": "China Eastern Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PKX",
                        "icao": "ZBAD"
                      },
                      "timezone": {
                        "name": "Asia/Shanghai",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": "G01-"
                      },
                      "name": "Beijing Daxing International Airport",
                      "position": {
                        "latitude": 39.509167,
                        "longitude": 116.410553,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Beijing"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "42",
                        "gate": "A13"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736241300,
                      "arrival": 1736264400
                    },
                    "real": {
                      "departure": 1736241669,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736263424
                    },
                    "other": {
                      "eta": 1736263424,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1a5fe",
                    "row": 5608646425,
                    "number": {
                      "default": "TR435",
                      "alternative": null
                    },
                    "callsign": "TGW435",
                    "codeshare": [
                      "SQ8485"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:49",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736264960,
                        "local": 1736293760
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A320",
                      "text": "Airbus A320-232"
                    },
                    "registration": "9V-TRL",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76D24C",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KCH",
                        "icao": "WBGG"
                      },
                      "timezone": {
                        "name": "Asia/Kuching",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Kuching International Airport",
                      "position": {
                        "latitude": 1.484697,
                        "longitude": 110.346901,
                        "country": {
                          "name": "Malaysia",
                          "code": "MY",
                          "id": 133
                        },
                        "region": {
                          "city": "Kuching"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "13",
                        "gate": "D32"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259300,
                      "arrival": 1736264700
                    },
                    "real": {
                      "departure": 1736260719,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736264960
                    },
                    "other": {
                      "eta": 1736264960,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a11058",
                    "row": 5608633456,
                    "number": {
                      "default": "SC8061",
                      "alternative": null
                    },
                    "callsign": "CDG8061",
                    "codeshare": [
                      "CA8863"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 00:23",
                    "icon": "yellow",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "yellow",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736267008,
                        "local": 1736295808
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B38M",
                      "text": "Boeing 737 MAX 8"
                    },
                    "registration": "B-224S",
                    "country": {
                      "id": 46,
                      "name": "China",
                      "alpha2": "CN",
                      "alpha3": "CHN"
                    },
                    "hex": "78203C",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Shandong Airlines",
                    "code": {
                      "iata": "SC",
                      "icao": "CDG"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/335.png"
                  },
                  "airline": {
                    "name": "Shandong Airlines",
                    "code": {
                      "iata": "SC",
                      "icao": "CDG"
                    },
                    "short": "Shandong Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TNA",
                        "icao": "ZSJN"
                      },
                      "timezone": {
                        "name": "Asia/Shanghai",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": "32"
                      },
                      "name": "Jinan Yaoqiang International Airport",
                      "position": {
                        "latitude": 36.857208,
                        "longitude": 117.215897,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Jinan"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "10",
                        "gate": "D46"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736243400,
                      "arrival": 1736265000
                    },
                    "real": {
                      "departure": 1736245276,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736267008
                    },
                    "other": {
                      "eta": 1736267008,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a19d3f",
                    "row": 5608646421,
                    "number": {
                      "default": "TR429",
                      "alternative": null
                    },
                    "callsign": "TGW429",
                    "codeshare": [
                      "SQ8603"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:13",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736262784,
                        "local": 1736291584
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A320",
                      "text": "Airbus A320-232"
                    },
                    "registration": "9V-TRS",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76D253",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PEN",
                        "icao": "WMKP"
                      },
                      "timezone": {
                        "name": "Asia/Kuala_Lumpur",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Penang International Airport",
                      "position": {
                        "latitude": 5.297139,
                        "longitude": 100.276802,
                        "country": {
                          "name": "Malaysia",
                          "code": "MY",
                          "id": 133
                        },
                        "region": {
                          "city": "Penang"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "17",
                        "gate": "D42"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259000,
                      "arrival": 1736265000
                    },
                    "real": {
                      "departure": 1736259031,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736262784
                    },
                    "other": {
                      "eta": 1736262784,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1452b",
                    "row": 5608637961,
                    "number": {
                      "default": "SQ897",
                      "alternative": null
                    },
                    "callsign": "SIA897",
                    "codeshare": [
                      "AC5884",
                      "ET1324",
                      "VA5777"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:32",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736263936,
                        "local": 1736292736
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SHS",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD13",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKG",
                        "icao": "VHHH"
                      },
                      "timezone": {
                        "name": "Asia/Hong_Kong",
                        "offset": 28800,
                        "abbr": "HKT",
                        "abbrName": "Hong Kong Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "8"
                      },
                      "name": "Hong Kong International Airport",
                      "position": {
                        "latitude": 22.309616,
                        "longitude": 113.916237,
                        "country": {
                          "name": "Hong Kong",
                          "code": "HK",
                          "id": 99
                        },
                        "region": {
                          "city": "Hong Kong"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "43",
                        "gate": "A1"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736250900,
                      "arrival": 1736265300
                    },
                    "real": {
                      "departure": 1736251828,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736263936
                    },
                    "other": {
                      "eta": 1736263936,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a156e3",
                    "row": 5608690696,
                    "number": {
                      "default": "5J803",
                      "alternative": null
                    },
                    "callsign": "CEB803",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:00",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736265600,
                        "local": 1736294400
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A321",
                      "text": "Airbus A321-211"
                    },
                    "registration": "RP-C4115",
                    "country": {
                      "id": 174,
                      "name": "Philippines",
                      "alpha2": "PH",
                      "alpha3": "PHL"
                    },
                    "hex": "758534",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Cebu Pacific",
                    "code": {
                      "iata": "5J",
                      "icao": "CEB"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/99.png"
                  },
                  "airline": {
                    "name": "Cebu Pacific",
                    "code": {
                      "iata": "5J",
                      "icao": "CEB"
                    },
                    "short": "Cebu Pacific"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MNL",
                        "icao": "RPLL"
                      },
                      "timezone": {
                        "name": "Asia/Manila",
                        "offset": 28800,
                        "abbr": "PST",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Manila Ninoy Aquino International Airport",
                      "position": {
                        "latitude": 14.50864,
                        "longitude": 121.019501,
                        "country": {
                          "name": "Philippines",
                          "code": "PH",
                          "id": 174
                        },
                        "region": {
                          "city": "Manila"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": "5",
                        "gate": "G17"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736252100,
                      "arrival": 1736265300
                    },
                    "real": {
                      "departure": 1736254215,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736265600
                    },
                    "other": {
                      "eta": 1736265600,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0e34c",
                    "row": 5608637251,
                    "number": {
                      "default": "SQ266",
                      "alternative": null
                    },
                    "callsign": "SIA266",
                    "codeshare": [
                      "AI8117",
                      "LX9211",
                      "VA5506"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:10",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736266240,
                        "local": 1736295040
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SHU",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD15",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BNE",
                        "icao": "YBBN"
                      },
                      "timezone": {
                        "name": "Australia/Brisbane",
                        "offset": 36000,
                        "abbr": "AEST",
                        "abbrName": "Australian Eastern Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": "81"
                      },
                      "name": "Brisbane Airport",
                      "position": {
                        "latitude": -27.388636,
                        "longitude": 153.126251,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Brisbane"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "33",
                        "gate": "E11"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736237400,
                      "arrival": 1736265900
                    },
                    "real": {
                      "departure": 1736240034,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736266240
                    },
                    "other": {
                      "eta": 1736266240,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a152a8",
                    "row": 5608690591,
                    "number": {
                      "default": "5J547",
                      "alternative": null
                    },
                    "callsign": "CEB547",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:40",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736264448,
                        "local": 1736293248
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A20N",
                      "text": "Airbus A320-271N"
                    },
                    "registration": "RP-C4134",
                    "country": {
                      "id": 174,
                      "name": "Philippines",
                      "alpha2": "PH",
                      "alpha3": "PHL"
                    },
                    "hex": "75870E",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Cebu Pacific",
                    "code": {
                      "iata": "5J",
                      "icao": "CEB"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/99.png"
                  },
                  "airline": {
                    "name": "Cebu Pacific",
                    "code": {
                      "iata": "5J",
                      "icao": "CEB"
                    },
                    "short": "Cebu Pacific"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "CEB",
                        "icao": "RPVM"
                      },
                      "timezone": {
                        "name": "Asia/Manila",
                        "offset": 28800,
                        "abbr": "PST",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Cebu Mactan International Airport",
                      "position": {
                        "latitude": 10.30754,
                        "longitude": 123.979401,
                        "country": {
                          "name": "Philippines",
                          "code": "PH",
                          "id": 174
                        },
                        "region": {
                          "city": "Cebu"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": "2",
                        "gate": "G12"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736252100,
                      "arrival": 1736265900
                    },
                    "real": {
                      "departure": 1736252793,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736264448
                    },
                    "other": {
                      "eta": 1736264448,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1097c",
                    "row": 5608580787,
                    "number": {
                      "default": "KE645",
                      "alternative": null
                    },
                    "callsign": "KAL645",
                    "codeshare": [
                      "DL7821",
                      "OM6231",
                      "WS6031"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:23",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736267008,
                        "local": 1736295808
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B77W",
                      "text": "Boeing 777-3B5(ER)"
                    },
                    "registration": "HL8042",
                    "country": {
                      "id": 207,
                      "name": "South Korea",
                      "alpha2": "KR",
                      "alpha3": "KOR"
                    },
                    "hex": "71C042",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Korean Air",
                    "code": {
                      "iata": "KE",
                      "icao": "KAL"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/91.png"
                  },
                  "airline": {
                    "name": "Korean Air",
                    "code": {
                      "iata": "KE",
                      "icao": "KAL"
                    },
                    "short": "Korean Air"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "ICN",
                        "icao": "RKSI"
                      },
                      "timezone": {
                        "name": "Asia/Seoul",
                        "offset": 32400,
                        "abbr": "KST",
                        "abbrName": "Korea Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Seoul Incheon International Airport",
                      "position": {
                        "latitude": 37.46907,
                        "longitude": 126.4505,
                        "country": {
                          "name": "South Korea",
                          "code": "KR",
                          "id": 207
                        },
                        "region": {
                          "city": "Seoul"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G19"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736242500,
                      "arrival": 1736266200
                    },
                    "real": {
                      "departure": 1736245105,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736267008
                    },
                    "other": {
                      "eta": 1736267008,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a180cc",
                    "row": 5608582047,
                    "number": {
                      "default": "KL836",
                      "alternative": null
                    },
                    "callsign": "KLM836",
                    "codeshare": [
                      "AF8218",
                      "GA9001"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:51",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736265088,
                        "local": 1736293888
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B77W",
                      "text": "Boeing 777-306(ER)"
                    },
                    "registration": "PH-BVB",
                    "country": {
                      "id": 155,
                      "name": "Netherlands",
                      "alpha2": "NL",
                      "alpha3": "NLD"
                    },
                    "hex": "48455F",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "KLM",
                    "code": {
                      "iata": "KL",
                      "icao": "KLM"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/8.png"
                  },
                  "airline": {
                    "name": "KLM Asia",
                    "code": {
                      "iata": "KL",
                      "icao": "KLM"
                    },
                    "short": "KLM"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "DPS",
                        "icao": "WADD"
                      },
                      "timezone": {
                        "name": "Asia/Makassar",
                        "offset": 28800,
                        "abbr": "WITA",
                        "abbrName": "Central Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": "5"
                      },
                      "name": "Denpasar Ngurah Rai International Airport",
                      "position": {
                        "latitude": -8.74816,
                        "longitude": 115.167099,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Denpasar"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "14",
                        "gate": "C23"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736257200,
                      "arrival": 1736266200
                    },
                    "real": {
                      "departure": 1736257521,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736265088
                    },
                    "other": {
                      "eta": 1736265088,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0e489",
                    "row": 5608636952,
                    "number": {
                      "default": "SQ208",
                      "alternative": null
                    },
                    "callsign": "SIA208",
                    "codeshare": [
                      "A31220",
                      "AI8201",
                      "ET1302",
                      "LX9023",
                      "SK8066",
                      "TK9303",
                      "VA5508"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:51",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736265088,
                        "local": 1736293888
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SMA",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CDA1",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MEL",
                        "icao": "YMML"
                      },
                      "timezone": {
                        "name": "Australia/Melbourne",
                        "offset": 39600,
                        "abbr": "AEDT",
                        "abbrName": "Australian Eastern Daylight Time",
                        "isDst": true
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "20"
                      },
                      "name": "Melbourne Airport",
                      "position": {
                        "latitude": -37.665794,
                        "longitude": 144.837296,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Melbourne"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "44",
                        "gate": "A14"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736238300,
                      "arrival": 1736266500
                    },
                    "real": {
                      "departure": 1736240235,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736265088
                    },
                    "other": {
                      "eta": 1736265088,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0eaf6",
                    "row": 5608637172,
                    "number": {
                      "default": "SQ242",
                      "alternative": null
                    },
                    "callsign": "SIA242",
                    "codeshare": [
                      "A31214",
                      "AI8273",
                      "ET1328",
                      "LH9769",
                      "LX9039",
                      "NH5369",
                      "SK8080",
                      "TK9327",
                      "VA5540"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:27",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736267264,
                        "local": 1736296064
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SMK",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CDAB",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "SYD",
                        "icao": "YSSY"
                      },
                      "timezone": {
                        "name": "Australia/Sydney",
                        "offset": 39600,
                        "abbr": "AEDT",
                        "abbrName": "Australian Eastern Daylight Time",
                        "isDst": true
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "58"
                      },
                      "name": "Sydney Kingsford Smith Airport",
                      "position": {
                        "latitude": -33.946098,
                        "longitude": 151.1772,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Sydney"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "A17"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736237400,
                      "arrival": 1736266800
                    },
                    "real": {
                      "departure": 1736240999,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736267264
                    },
                    "other": {
                      "eta": 1736267264,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1804e",
                    "row": 5608638082,
                    "number": {
                      "default": "SQ947",
                      "alternative": null
                    },
                    "callsign": "SIA947",
                    "codeshare": [
                      "AI8149",
                      "GA9075",
                      "SK8048"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 23:57",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736265472,
                        "local": 1736294272
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B78X",
                      "text": "Boeing 787-10 Dreamliner"
                    },
                    "registration": "9V-SCQ",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CC71",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "DPS",
                        "icao": "WADD"
                      },
                      "timezone": {
                        "name": "Asia/Makassar",
                        "offset": 28800,
                        "abbr": "WITA",
                        "abbrName": "Central Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Denpasar Ngurah Rai International Airport",
                      "position": {
                        "latitude": -8.74816,
                        "longitude": 115.167099,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Denpasar"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "42",
                        "gate": "B4"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736257500,
                      "arrival": 1736266800
                    },
                    "real": {
                      "departure": 1736257716,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736265472
                    },
                    "other": {
                      "eta": 1736265472,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1ade2",
                    "row": 5608685486,
                    "number": {
                      "default": "3K206",
                      "alternative": null
                    },
                    "callsign": "JSA206",
                    "codeshare": [
                      "EK7765",
                      "QF5206"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A320",
                      "text": "Airbus A320-232"
                    },
                    "registration": "9V-JSL",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76AA6C",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Jetstar Asia",
                    "code": {
                      "iata": "3K",
                      "icao": "JSA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/645.png"
                  },
                  "airline": {
                    "name": "Jetstar",
                    "code": {
                      "iata": "JQ",
                      "icao": "JST"
                    },
                    "short": "Jetstar"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "CGK",
                        "icao": "WIII"
                      },
                      "timezone": {
                        "name": "Asia/Jakarta",
                        "offset": 25200,
                        "abbr": "WIB",
                        "abbrName": "Western Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Jakarta Soekarno Hatta International Airport",
                      "position": {
                        "latitude": -6.12556,
                        "longitude": 106.6558,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Jakarta"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": "3",
                        "gate": "G10"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259900,
                      "arrival": 1736266800
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736259900,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a15a30",
                    "row": 5608518796,
                    "number": {
                      "default": "CX715",
                      "alternative": null
                    },
                    "callsign": "CPA715",
                    "codeshare": [
                      "AA8903",
                      "AY5855",
                      "OM5609",
                      "QR3471"
                    ]
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:14",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736266496,
                        "local": 1736295296
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A333",
                      "text": "Airbus A330-343"
                    },
                    "registration": "B-HWM",
                    "country": {
                      "id": 99,
                      "name": "Hong Kong",
                      "alpha2": "HK",
                      "alpha3": "HKG"
                    },
                    "hex": "780A5A",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Cathay Pacific",
                    "code": {
                      "iata": "CX",
                      "icao": "CPA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/57.png"
                  },
                  "airline": {
                    "name": "Cathay Pacific",
                    "code": {
                      "iata": "CX",
                      "icao": "CPA"
                    },
                    "short": "Cathay Pacific"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKG",
                        "icao": "VHHH"
                      },
                      "timezone": {
                        "name": "Asia/Hong_Kong",
                        "offset": 28800,
                        "abbr": "HKT",
                        "abbrName": "Hong Kong Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "3"
                      },
                      "name": "Hong Kong International Airport",
                      "position": {
                        "latitude": 22.309616,
                        "longitude": 113.916237,
                        "country": {
                          "name": "Hong Kong",
                          "code": "HK",
                          "id": 99
                        },
                        "region": {
                          "city": "Hong Kong"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": "7",
                        "gate": "G18"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736252700,
                      "arrival": 1736267100
                    },
                    "real": {
                      "departure": 1736254171,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736266496
                    },
                    "other": {
                      "eta": 1736266496,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608543243,
                    "number": {
                      "default": "ET639",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": [
                      "MH5973"
                    ]
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B788",
                      "text": "Boeing 787-8 Dreamliner"
                    },
                    "registration": "ET-AOV",
                    "country": {
                      "id": 71,
                      "name": "Ethiopia",
                      "alpha2": "ET",
                      "alpha3": "ETH"
                    },
                    "hex": "04004C",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Ethiopian Airlines",
                    "code": {
                      "iata": "ET",
                      "icao": "ETH"
                    },
                    "logo": null
                  },
                  "airline": {
                    "name": "Ethiopian Airlines",
                    "code": {
                      "iata": "ET",
                      "icao": "ETH"
                    },
                    "short": "Ethiopian Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KUL",
                        "icao": "WMKK"
                      },
                      "timezone": {
                        "name": "Asia/Kuala_Lumpur",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "C22"
                      },
                      "name": "Kuala Lumpur International Airport",
                      "position": {
                        "latitude": 2.745578,
                        "longitude": 101.7099,
                        "country": {
                          "name": "Malaysia",
                          "code": "MY",
                          "id": 133
                        },
                        "region": {
                          "city": "Kuala Lumpur"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "30",
                        "gate": "F54"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736262300,
                      "arrival": 1736267100
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736262300,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1a7f2",
                    "row": 5608541630,
                    "number": {
                      "default": "EK349",
                      "alternative": null
                    },
                    "callsign": "UAE349",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:19",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736266752,
                        "local": 1736295552
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B77W",
                      "text": "Boeing 777-31H(ER)"
                    },
                    "registration": "A6-EPB",
                    "country": {
                      "id": 234,
                      "name": "United Arab Emirates",
                      "alpha2": "AE",
                      "alpha3": "ARE"
                    },
                    "hex": "8963D1",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Emirates",
                    "code": {
                      "iata": "EK",
                      "icao": "UAE"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/31.png"
                  },
                  "airline": {
                    "name": "Emirates",
                    "code": {
                      "iata": "EK",
                      "icao": "UAE"
                    },
                    "short": "Emirates"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PNH",
                        "icao": "VDPP"
                      },
                      "timezone": {
                        "name": "Asia/Phnom_Penh",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Phnom Penh International Airport",
                      "position": {
                        "latitude": 11.54655,
                        "longitude": 104.844101,
                        "country": {
                          "name": "Cambodia",
                          "code": "KH",
                          "id": 38
                        },
                        "region": {
                          "city": "Phnom Penh"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": "12",
                        "gate": "C20"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736260200,
                      "arrival": 1736267400
                    },
                    "real": {
                      "departure": 1736260554,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736266752
                    },
                    "other": {
                      "eta": 1736266752,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608601607,
                    "number": {
                      "default": "MH609",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "738",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Malaysia Airlines",
                    "code": {
                      "iata": "MH",
                      "icao": "MAS"
                    },
                    "short": "Malaysia Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KUL",
                        "icao": "WMKK"
                      },
                      "timezone": {
                        "name": "Asia/Kuala_Lumpur",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "H10"
                      },
                      "name": "Kuala Lumpur International Airport",
                      "position": {
                        "latitude": 2.745578,
                        "longitude": 101.7099,
                        "country": {
                          "name": "Malaysia",
                          "code": "MY",
                          "id": 133
                        },
                        "region": {
                          "city": "Kuala Lumpur"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "37",
                        "gate": "F56"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736263200,
                      "arrival": 1736267400
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736263200,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608685433,
                    "number": {
                      "default": "3K572",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "32S",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Jetstar Asia",
                    "code": {
                      "iata": "3K",
                      "icao": "JSA"
                    },
                    "short": "Jetstar Asia"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KBV",
                        "icao": "VTSG"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Krabi Airport",
                      "position": {
                        "latitude": 8.095969,
                        "longitude": 98.988762,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Krabi"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": "6",
                        "gate": "G9"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736260500,
                      "arrival": 1736267400
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736260500,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a114b6",
                    "row": 5608616696,
                    "number": {
                      "default": "OZ753",
                      "alternative": null
                    },
                    "callsign": "AAR753",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 01:08",
                    "icon": "yellow",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "yellow",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736269696,
                        "local": 1736298496
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B772",
                      "text": "Boeing 777-28E(ER)"
                    },
                    "registration": "HL7775",
                    "country": {
                      "id": 207,
                      "name": "South Korea",
                      "alpha2": "KR",
                      "alpha3": "KOR"
                    },
                    "hex": "71BF75",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Asiana Airlines",
                    "code": {
                      "iata": "OZ",
                      "icao": "AAR"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/90.png"
                  },
                  "airline": {
                    "name": "Asiana Airlines",
                    "code": {
                      "iata": "OZ",
                      "icao": "AAR"
                    },
                    "short": "Asiana Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "ICN",
                        "icao": "RKSI"
                      },
                      "timezone": {
                        "name": "Asia/Seoul",
                        "offset": 32400,
                        "abbr": "KST",
                        "abbrName": "Korea Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Seoul Incheon International Airport",
                      "position": {
                        "latitude": 37.46907,
                        "longitude": 126.4505,
                        "country": {
                          "name": "South Korea",
                          "code": "KR",
                          "id": 207
                        },
                        "region": {
                          "city": "Seoul"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "B6"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736244300,
                      "arrival": 1736267700
                    },
                    "real": {
                      "departure": 1736246542,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736269696
                    },
                    "other": {
                      "eta": 1736269696,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a14261",
                    "row": 5608516873,
                    "number": {
                      "default": "CI755",
                      "alternative": null
                    },
                    "callsign": "CAL755",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:29",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736267392,
                        "local": 1736296192
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A333",
                      "text": "Airbus A330-302"
                    },
                    "registration": "B-18358",
                    "country": {
                      "id": 218,
                      "name": "Taiwan",
                      "alpha2": "TW",
                      "alpha3": "TWN"
                    },
                    "hex": "8991AA",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "China Airlines",
                    "code": {
                      "iata": "CI",
                      "icao": "CAL"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/86.png"
                  },
                  "airline": {
                    "name": "China Airlines",
                    "code": {
                      "iata": "CI",
                      "icao": "CAL"
                    },
                    "short": "China Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TPE",
                        "icao": "RCTP"
                      },
                      "timezone": {
                        "name": "Asia/Taipei",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "A2"
                      },
                      "name": "Taipei Taoyuan International Airport",
                      "position": {
                        "latitude": 25.07773,
                        "longitude": 121.232803,
                        "country": {
                          "name": "Taiwan",
                          "code": "TW",
                          "id": 218
                        },
                        "region": {
                          "city": "Taipei"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "A10"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736250900,
                      "arrival": 1736268000
                    },
                    "real": {
                      "departure": 1736251790,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736267392
                    },
                    "other": {
                      "eta": 1736267392,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a19bfe",
                    "row": 5608637817,
                    "number": {
                      "default": "SQ719",
                      "alternative": null
                    },
                    "callsign": "SIA719",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:21",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736266880,
                        "local": 1736295680
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B78X",
                      "text": "Boeing 787-10 Dreamliner"
                    },
                    "registration": "9V-SCF",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CC66",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BKK",
                        "icao": "VTBS"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Bangkok Suvarnabhumi Airport",
                      "position": {
                        "latitude": 13.6811,
                        "longitude": 100.7472,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Bangkok"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": "44",
                        "gate": "A16"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259000,
                      "arrival": 1736268000
                    },
                    "real": {
                      "departure": 1736259656,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736266880
                    },
                    "other": {
                      "eta": 1736266880,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a17bf6",
                    "row": 5608685567,
                    "number": {
                      "default": "3K766",
                      "alternative": null
                    },
                    "callsign": "JSA766",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:57",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736269056,
                        "local": 1736297856
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A320",
                      "text": "Airbus A320-232"
                    },
                    "registration": "9V-JSU",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76AA75",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Jetstar Asia",
                    "code": {
                      "iata": "3K",
                      "icao": "JSA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/645.png"
                  },
                  "airline": {
                    "name": "Jetstar",
                    "code": {
                      "iata": "3K",
                      "icao": "JSA"
                    },
                    "short": "Jetstar Asia"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MNL",
                        "icao": "RPLL"
                      },
                      "timezone": {
                        "name": "Asia/Manila",
                        "offset": 28800,
                        "abbr": "PST",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Manila Ninoy Aquino International Airport",
                      "position": {
                        "latitude": 14.50864,
                        "longitude": 121.019501,
                        "country": {
                          "name": "Philippines",
                          "code": "PH",
                          "id": 174
                        },
                        "region": {
                          "city": "Manila"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G8"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736255100,
                      "arrival": 1736268300
                    },
                    "real": {
                      "departure": 1736257862,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736269056
                    },
                    "other": {
                      "eta": 1736269056,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0843f",
                    "row": 5611431540,
                    "number": {
                      "default": "3S530",
                      "alternative": null
                    },
                    "callsign": "BOX530",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:38",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736267904,
                        "local": 1736296704
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B77L",
                      "text": "Boeing 777-FZN"
                    },
                    "registration": "D-AALC",
                    "country": {
                      "id": 83,
                      "name": "Germany",
                      "alpha2": "DE",
                      "alpha3": "DEU"
                    },
                    "hex": "3C4583",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "AeroLogic",
                    "code": {
                      "iata": "3S",
                      "icao": "BOX"
                    },
                    "logo": null
                  },
                  "airline": {
                    "name": "AeroLogic",
                    "code": {
                      "iata": "3S",
                      "icao": "BOX"
                    },
                    "short": "AeroLogic"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "LEJ",
                        "icao": "EDDP"
                      },
                      "timezone": {
                        "name": "Europe/Berlin",
                        "offset": 3600,
                        "abbr": "CET",
                        "abbrName": "Central European Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Leipzig Halle Airport",
                      "position": {
                        "latitude": 51.432442,
                        "longitude": 12.24163,
                        "country": {
                          "name": "Germany",
                          "code": "DE",
                          "id": 83
                        },
                        "region": {
                          "city": "Leipzig"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736226600,
                      "arrival": 1736268480
                    },
                    "real": {
                      "departure": 1736226803,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736267904
                    },
                    "other": {
                      "eta": 1736267904,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0fb13",
                    "row": 5608576805,
                    "number": {
                      "default": "JL711",
                      "alternative": null
                    },
                    "callsign": "JAL711",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 01:04",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736269440,
                        "local": 1736298240
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B763",
                      "text": "Boeing 767-346(ER)"
                    },
                    "registration": "JA617J",
                    "country": {
                      "id": 111,
                      "name": "Japan",
                      "alpha2": "JP",
                      "alpha3": "JPN"
                    },
                    "hex": "861F44",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Japan Airlines",
                    "code": {
                      "iata": "JL",
                      "icao": "JAL"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/24.png"
                  },
                  "airline": {
                    "name": "Japan Airlines",
                    "code": {
                      "iata": "JL",
                      "icao": "JAL"
                    },
                    "short": "Japan Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "NRT",
                        "icao": "RJAA"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "96"
                      },
                      "name": "Tokyo Narita International Airport",
                      "position": {
                        "latitude": 35.764721,
                        "longitude": 140.386307,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Tokyo"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "C18"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736241000,
                      "arrival": 1736268600
                    },
                    "real": {
                      "departure": 1736243806,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736269440
                    },
                    "other": {
                      "eta": 1736269440,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1a42b",
                    "row": 5608685389,
                    "number": {
                      "default": "3K514",
                      "alternative": null
                    },
                    "callsign": "JSA514",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A320",
                      "text": "Airbus A320-232"
                    },
                    "registration": "9V-JSI",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76AA69",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Jetstar Asia",
                    "code": {
                      "iata": "3K",
                      "icao": "JSA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/645.png"
                  },
                  "airline": {
                    "name": "Jetstar",
                    "code": {
                      "iata": "JQ",
                      "icao": "JST"
                    },
                    "short": "Jetstar"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BKK",
                        "icao": "VTBS"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Bangkok Suvarnabhumi Airport",
                      "position": {
                        "latitude": 13.6811,
                        "longitude": 100.7472,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Bangkok"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G15"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259600,
                      "arrival": 1736268600
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736259600,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608685425,
                    "number": {
                      "default": "3K538",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "32S",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Jetstar Asia",
                    "code": {
                      "iata": "3K",
                      "icao": "JSA"
                    },
                    "short": "Jetstar Asia"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKT",
                        "icao": "VTSP"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Phuket International Airport",
                      "position": {
                        "latitude": 8.1132,
                        "longitude": 98.316872,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Phuket"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G11"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736261700,
                      "arrival": 1736268600
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736261700,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0f597",
                    "row": 5608610237,
                    "number": {
                      "default": "NH801",
                      "alternative": "NQ801"
                    },
                    "callsign": "ANA801",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:32",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736267520,
                        "local": 1736296320
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B789",
                      "text": "Boeing 787-9 Dreamliner"
                    },
                    "registration": "JA893A",
                    "country": {
                      "id": 111,
                      "name": "Japan",
                      "alpha2": "JP",
                      "alpha3": "JPN"
                    },
                    "hex": "86EEE4",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Air Japan",
                    "code": {
                      "iata": "NQ",
                      "icao": "AJX"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/929.png"
                  },
                  "airline": {
                    "name": "All Nippon Airways",
                    "code": {
                      "iata": "NH",
                      "icao": "ANA"
                    },
                    "short": "All Nippon Airways"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "NRT",
                        "icao": "RJAA"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "57B"
                      },
                      "name": "Tokyo Narita International Airport",
                      "position": {
                        "latitude": 35.764721,
                        "longitude": 140.386307,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Tokyo"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "E8"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736241600,
                      "arrival": 1736268900
                    },
                    "real": {
                      "departure": 1736242403,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736267520
                    },
                    "other": {
                      "eta": 1736267520,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a16d13",
                    "row": 5608646633,
                    "number": {
                      "default": "TR977",
                      "alternative": null
                    },
                    "callsign": "TGW977",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 00:44",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736268288,
                        "local": 1736297088
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A320",
                      "text": "Airbus A320-232"
                    },
                    "registration": "9V-TRN",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76D24E",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKG",
                        "icao": "VHHH"
                      },
                      "timezone": {
                        "name": "Asia/Hong_Kong",
                        "offset": 28800,
                        "abbr": "HKT",
                        "abbrName": "Hong Kong Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "70"
                      },
                      "name": "Hong Kong International Airport",
                      "position": {
                        "latitude": 22.309616,
                        "longitude": 113.916237,
                        "country": {
                          "name": "Hong Kong",
                          "code": "HK",
                          "id": 99
                        },
                        "region": {
                          "city": "Hong Kong"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "C16"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736254800,
                      "arrival": 1736268900
                    },
                    "real": {
                      "departure": 1736255880,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736268288
                    },
                    "other": {
                      "eta": 1736268288,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a11237",
                    "row": 5608603222,
                    "number": {
                      "default": "MM773",
                      "alternative": null
                    },
                    "callsign": "APJ773",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 01:38",
                    "icon": "yellow",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "yellow",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736271488,
                        "local": 1736300288
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A21N",
                      "text": "Airbus A321-251NX"
                    },
                    "registration": "JA901P",
                    "country": {
                      "id": 111,
                      "name": "Japan",
                      "alpha2": "JP",
                      "alpha3": "JPN"
                    },
                    "hex": "872841",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Peach",
                    "code": {
                      "iata": "MM",
                      "icao": "APJ"
                    },
                    "logo": null
                  },
                  "airline": {
                    "name": "Peach",
                    "code": {
                      "iata": "MM",
                      "icao": "APJ"
                    },
                    "short": "Peach"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KIX",
                        "icao": "RJBB"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "89"
                      },
                      "name": "Osaka Kansai International Airport",
                      "position": {
                        "latitude": 34.427299,
                        "longitude": 135.244003,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Osaka"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "E22"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736243400,
                      "arrival": 1736269200
                    },
                    "real": {
                      "departure": 1736246178,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736271488
                    },
                    "other": {
                      "eta": 1736271488,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a11a62",
                    "row": 5608648039,
                    "number": {
                      "default": "TW171",
                      "alternative": null
                    },
                    "callsign": "TWB171",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 01:33",
                    "icon": "yellow",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "yellow",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736271232,
                        "local": 1736300032
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A333",
                      "text": "Airbus A330-343"
                    },
                    "registration": "HL8560",
                    "country": {
                      "id": 207,
                      "name": "South Korea",
                      "alpha2": "KR",
                      "alpha3": "KOR"
                    },
                    "hex": "71C560",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "T'way Air",
                    "code": {
                      "iata": "TW",
                      "icao": "TWB"
                    },
                    "logo": null
                  },
                  "airline": {
                    "name": "T'way Air",
                    "code": {
                      "iata": "TW",
                      "icao": "TWB"
                    },
                    "short": "T'way Air"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "ICN",
                        "icao": "RKSI"
                      },
                      "timezone": {
                        "name": "Asia/Seoul",
                        "offset": 32400,
                        "abbr": "KST",
                        "abbrName": "Korea Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Seoul Incheon International Airport",
                      "position": {
                        "latitude": 37.46907,
                        "longitude": 126.4505,
                        "country": {
                          "name": "South Korea",
                          "code": "KR",
                          "id": 207
                        },
                        "region": {
                          "city": "Seoul"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "B8"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736243400,
                      "arrival": 1736269200
                    },
                    "real": {
                      "departure": 1736247912,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736271232
                    },
                    "other": {
                      "eta": 1736271232,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5610191424,
                    "number": {
                      "default": "TK6266",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "77X",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Turkish Airlines",
                    "code": {
                      "iata": "TK",
                      "icao": "THY"
                    },
                    "short": "Turkish Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BKK",
                        "icao": "VTBS"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Bangkok Suvarnabhumi Airport",
                      "position": {
                        "latitude": 13.6811,
                        "longitude": 100.7472,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Bangkok"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736261700,
                      "arrival": 1736269200
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a10800",
                    "row": 5608636579,
                    "number": {
                      "default": "SQ11",
                      "alternative": null
                    },
                    "callsign": "SIA11",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 01:12",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736269952,
                        "local": 1736298752
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B77W",
                      "text": "Boeing 777-312(ER)"
                    },
                    "registration": "9V-SWH",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CEE8",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "NRT",
                        "icao": "RJAA"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "35"
                      },
                      "name": "Tokyo Narita International Airport",
                      "position": {
                        "latitude": 35.764721,
                        "longitude": 140.386307,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Tokyo"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "B10"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736243400,
                      "arrival": 1736270400
                    },
                    "real": {
                      "departure": 1736244907,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736269952
                    },
                    "other": {
                      "eta": 1736269952,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1ad4c",
                    "row": 5611679808,
                    "number": {
                      "default": "MU9647",
                      "alternative": null
                    },
                    "callsign": "CES9647",
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B738",
                      "text": "Boeing 737-89P"
                    },
                    "registration": "B-6249",
                    "country": {
                      "id": 46,
                      "name": "China",
                      "alpha2": "CN",
                      "alpha3": "CHN"
                    },
                    "hex": "780E85",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "China Eastern Airlines",
                    "code": {
                      "iata": "MU",
                      "icao": "CES"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/131.png"
                  },
                  "airline": {
                    "name": "China Eastern Airlines",
                    "code": {
                      "iata": "MU",
                      "icao": "CES"
                    },
                    "short": "China Eastern Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KMG",
                        "icao": "ZPPP"
                      },
                      "timezone": {
                        "name": "Asia/Chongqing",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": "J07-"
                      },
                      "name": "Kunming Changshui International Airport",
                      "position": {
                        "latitude": 25.101944,
                        "longitude": 102.929169,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Kunming"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "A19"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736255700,
                      "arrival": 1736271000
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736256180,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1a056",
                    "row": 5610174983,
                    "number": {
                      "default": "O3105",
                      "alternative": null
                    },
                    "callsign": "CSS105",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 01:44",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736271872,
                        "local": 1736300672
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B763",
                      "text": "Boeing 767-333(ER)(BCF)"
                    },
                    "registration": "B-221K",
                    "country": {
                      "id": 46,
                      "name": "China",
                      "alpha2": "CN",
                      "alpha3": "CHN"
                    },
                    "hex": "781CB2",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "SF Airlines",
                    "code": {
                      "iata": "O3",
                      "icao": "CSS"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/1017.png"
                  },
                  "airline": {
                    "name": "SF Airlines",
                    "code": {
                      "iata": "O3",
                      "icao": "CSS"
                    },
                    "short": "SF Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "SZX",
                        "icao": "ZGSZ"
                      },
                      "timezone": {
                        "name": "Asia/Shanghai",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Shenzhen Bao'an International Airport",
                      "position": {
                        "latitude": 22.638775,
                        "longitude": 113.803993,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Shenzhen"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259000,
                      "arrival": 1736271300
                    },
                    "real": {
                      "departure": 1736259268,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736271872
                    },
                    "other": {
                      "eta": 1736271872,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a15191",
                    "row": 5608692878,
                    "number": {
                      "default": "6E1007",
                      "alternative": null
                    },
                    "callsign": "IGO1007",
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A20N",
                      "text": "Airbus A320-251N"
                    },
                    "registration": "VT-IXM",
                    "country": {
                      "id": 102,
                      "name": "India",
                      "alpha2": "IN",
                      "alpha3": "IND"
                    },
                    "hex": "801729",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/783.png"
                  },
                  "airline": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "short": "IndiGo"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TRZ",
                        "icao": "VOTR"
                      },
                      "timezone": {
                        "name": "Asia/Kolkata",
                        "offset": 19800,
                        "abbr": "IST",
                        "abbrName": "India Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Tiruchirappalli International Airport",
                      "position": {
                        "latitude": 10.76536,
                        "longitude": 78.709717,
                        "country": {
                          "name": "India",
                          "code": "IN",
                          "id": 102
                        },
                        "region": {
                          "city": "Tiruchirapalli"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "E28"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736256000,
                      "arrival": 1736271900
                    },
                    "real": {
                      "departure": 1736256448,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a18705",
                    "row": 5608604288,
                    "number": {
                      "default": "MU2045",
                      "alternative": null
                    },
                    "callsign": "CES2045",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 02:03",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736273024,
                        "local": 1736301824
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A20N",
                      "text": "Airbus A320-251N"
                    },
                    "registration": "B-32DX",
                    "country": {
                      "id": 46,
                      "name": "China",
                      "alpha2": "CN",
                      "alpha3": "CHN"
                    },
                    "hex": "781F42",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "China Eastern Airlines",
                    "code": {
                      "iata": "MU",
                      "icao": "CES"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/131.png"
                  },
                  "airline": {
                    "name": "China Eastern Airlines",
                    "code": {
                      "iata": "MU",
                      "icao": "CES"
                    },
                    "short": "China Eastern Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "CSX",
                        "icao": "ZGHA"
                      },
                      "timezone": {
                        "name": "Asia/Shanghai",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "D78-"
                      },
                      "name": "Changsha Huanghua International Airport",
                      "position": {
                        "latitude": 28.191599,
                        "longitude": 113.223534,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Changsha"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "A4"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736256000,
                      "arrival": 1736272800
                    },
                    "real": {
                      "departure": 1736257140,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736273024
                    },
                    "other": {
                      "eta": 1736273024,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608646613,
                    "number": {
                      "default": "TR691",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "295",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KBV",
                        "icao": "VTSG"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Krabi Airport",
                      "position": {
                        "latitude": 8.095969,
                        "longitude": 98.988762,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Krabi"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "T1"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736265900,
                      "arrival": 1736272800
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608685494,
                    "number": {
                      "default": "3K240",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "32S",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Jetstar Asia",
                    "code": {
                      "iata": "3K",
                      "icao": "JSA"
                    },
                    "short": "Jetstar Asia"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "DPS",
                        "icao": "WADD"
                      },
                      "timezone": {
                        "name": "Asia/Makassar",
                        "offset": 28800,
                        "abbr": "WITA",
                        "abbrName": "Central Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Denpasar Ngurah Rai International Airport",
                      "position": {
                        "latitude": -8.74816,
                        "longitude": 115.167099,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Denpasar"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G13"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736263800,
                      "arrival": 1736273700
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736263800,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a166e1",
                    "row": 5608646566,
                    "number": {
                      "default": "TR841",
                      "alternative": null
                    },
                    "callsign": "TGW841",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 03:22",
                    "icon": "red",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "red",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736277760,
                        "local": 1736306560
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B788",
                      "text": "Boeing 787-8 Dreamliner"
                    },
                    "registration": "9V-OFC",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76BCC3",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "ICN",
                        "icao": "RKSI"
                      },
                      "timezone": {
                        "name": "Asia/Seoul",
                        "offset": 32400,
                        "abbr": "KST",
                        "abbrName": "Korea Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Seoul Incheon International Airport",
                      "position": {
                        "latitude": 37.46907,
                        "longitude": 126.4505,
                        "country": {
                          "name": "South Korea",
                          "code": "KR",
                          "id": 207
                        },
                        "region": {
                          "city": "Seoul"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "D48"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736250300,
                      "arrival": 1736274300
                    },
                    "real": {
                      "departure": 1736255469,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736277760
                    },
                    "other": {
                      "eta": 1736277760,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a0a9c4",
                    "row": 5611558654,
                    "number": {
                      "default": "SQ9305",
                      "alternative": null
                    },
                    "callsign": "SIA9305",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 02:40",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736275200,
                        "local": 1736304000
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A388",
                      "text": "Airbus A380-841"
                    },
                    "registration": "9V-SKM",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD6D",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "LHR",
                        "icao": "EGLL"
                      },
                      "timezone": {
                        "name": "Europe/London",
                        "offset": 0,
                        "abbr": "GMT",
                        "abbrName": "Greenwich Mean Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "London Heathrow Airport",
                      "position": {
                        "latitude": 51.471626,
                        "longitude": -0.467081,
                        "country": {
                          "name": "United Kingdom",
                          "code": "GB",
                          "id": 235
                        },
                        "region": {
                          "city": "London"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736229600,
                      "arrival": 1736274600
                    },
                    "real": {
                      "departure": 1736232205,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736275200
                    },
                    "other": {
                      "eta": 1736275200,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608696510,
                    "number": {
                      "default": "8K801",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "73P",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "K-Mile Air",
                    "code": {
                      "iata": "8K",
                      "icao": "KMI"
                    },
                    "short": "K-Mile Air"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "CGK",
                        "icao": "WIII"
                      },
                      "timezone": {
                        "name": "Asia/Jakarta",
                        "offset": 25200,
                        "abbr": "WIB",
                        "abbrName": "Western Indonesian Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Jakarta Soekarno Hatta International Airport",
                      "position": {
                        "latitude": -6.12556,
                        "longitude": 106.6558,
                        "country": {
                          "name": "Indonesia",
                          "code": "ID",
                          "id": 103
                        },
                        "region": {
                          "city": "Jakarta"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736268900,
                      "arrival": 1736275200
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a128dd",
                    "row": 5611578933,
                    "number": {
                      "default": "SQ7433",
                      "alternative": null
                    },
                    "callsign": "SIA7433",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 02:48",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736275712,
                        "local": 1736304512
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B77L",
                      "text": "Boeing 777-F"
                    },
                    "registration": "9V-DHA",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "769101",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "DHL",
                    "code": {
                      "iata": "D0",
                      "icao": "DHK"
                    },
                    "short": "DHL Air"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "SYD",
                        "icao": "YSSY"
                      },
                      "timezone": {
                        "name": "Australia/Sydney",
                        "offset": 39600,
                        "abbr": "AEDT",
                        "abbrName": "Australian Eastern Daylight Time",
                        "isDst": true
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Sydney Kingsford Smith Airport",
                      "position": {
                        "latitude": -33.946098,
                        "longitude": 151.1772,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Sydney"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736248500,
                      "arrival": 1736275440
                    },
                    "real": {
                      "departure": 1736248692,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736275712
                    },
                    "other": {
                      "eta": 1736275712,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608558587,
                    "number": {
                      "default": "GX8967",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "32S",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "GX Airlines",
                    "code": {
                      "iata": "GX",
                      "icao": "CBG"
                    },
                    "short": "GX Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "NNG",
                        "icao": "ZGNN"
                      },
                      "timezone": {
                        "name": "Asia/Chongqing",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": "A"
                      },
                      "name": "Nanning Wuxu International Airport",
                      "position": {
                        "latitude": 22.608259,
                        "longitude": 108.172401,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Nanning"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G6"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736261700,
                      "arrival": 1736275800
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736261760,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a17ee9",
                    "row": 5608646304,
                    "number": {
                      "default": "TR17",
                      "alternative": null
                    },
                    "callsign": "TGW17",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 02:20",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736274048,
                        "local": 1736302848
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B788",
                      "text": "Boeing 787-8 Dreamliner"
                    },
                    "registration": "9V-OFB",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76BCC2",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PER",
                        "icao": "YPPH"
                      },
                      "timezone": {
                        "name": "Australia/Perth",
                        "offset": 28800,
                        "abbr": "AWST",
                        "abbrName": "Australian Western Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Perth Airport",
                      "position": {
                        "latitude": -31.940201,
                        "longitude": 115.966904,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Perth"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "D44"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736256600,
                      "arrival": 1736275800
                    },
                    "real": {
                      "departure": 1736257181,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736274048
                    },
                    "other": {
                      "eta": 1736274048,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a131bb",
                    "row": 5608646310,
                    "number": {
                      "default": "TR21",
                      "alternative": null
                    },
                    "callsign": "TGW21",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 02:48",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736275712,
                        "local": 1736304512
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B789",
                      "text": "Boeing 787-9 Dreamliner"
                    },
                    "registration": "9V-OJF",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76BD46",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "SYD",
                        "icao": "YSSY"
                      },
                      "timezone": {
                        "name": "Australia/Sydney",
                        "offset": 39600,
                        "abbr": "AEDT",
                        "abbrName": "Australian Eastern Daylight Time",
                        "isDst": true
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "58"
                      },
                      "name": "Sydney Kingsford Smith Airport",
                      "position": {
                        "latitude": -33.946098,
                        "longitude": 151.1772,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Sydney"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "C15"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736247000,
                      "arrival": 1736276100
                    },
                    "real": {
                      "departure": 1736249759,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736275712
                    },
                    "other": {
                      "eta": 1736275712,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608646507,
                    "number": {
                      "default": "TR617",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "32S",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BKK",
                        "icao": "VTBS"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Bangkok Suvarnabhumi Airport",
                      "position": {
                        "latitude": 13.6811,
                        "longitude": 100.7472,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Bangkok"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "D30"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736266200,
                      "arrival": 1736276100
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736266200,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608521639,
                    "number": {
                      "default": "CZ8489",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "7M8",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "China Southern Airlines",
                    "code": {
                      "iata": "CZ",
                      "icao": "CSN"
                    },
                    "short": "China Southern Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "CAN",
                        "icao": "ZGGG"
                      },
                      "timezone": {
                        "name": "Asia/Shanghai",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "P"
                      },
                      "name": "Guangzhou Baiyun International Airport",
                      "position": {
                        "latitude": 23.392429,
                        "longitude": 113.298698,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Guangzhou"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "C18"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736261400,
                      "arrival": 1736276700
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736262420,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1a7c3",
                    "row": 5608646597,
                    "number": {
                      "default": "TR893",
                      "alternative": null
                    },
                    "callsign": "TGW893",
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B788",
                      "text": "Boeing 787-8 Dreamliner"
                    },
                    "registration": "9V-OFG",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76BCC7",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TPE",
                        "icao": "RCTP"
                      },
                      "timezone": {
                        "name": "Asia/Taipei",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "B4"
                      },
                      "name": "Taipei Taoyuan International Airport",
                      "position": {
                        "latitude": 25.07773,
                        "longitude": 121.232803,
                        "country": {
                          "name": "Taiwan",
                          "code": "TW",
                          "id": 218
                        },
                        "region": {
                          "city": "Taipei"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "D34"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259600,
                      "arrival": 1736276700
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736259600,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608692941,
                    "number": {
                      "default": "6E1093",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A320",
                      "text": "Airbus A320-232"
                    },
                    "registration": "VT-IFS",
                    "country": {
                      "id": 102,
                      "name": "India",
                      "alpha2": "IN",
                      "alpha3": "IND"
                    },
                    "hex": "8007CF",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/783.png"
                  },
                  "airline": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "short": "IndiGo"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "CJB",
                        "icao": "VOCB"
                      },
                      "timezone": {
                        "name": "Asia/Kolkata",
                        "offset": 19800,
                        "abbr": "IST",
                        "abbrName": "India Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Coimbatore International Airport",
                      "position": {
                        "latitude": 11.03003,
                        "longitude": 77.043381,
                        "country": {
                          "name": "India",
                          "code": "IN",
                          "id": 102
                        },
                        "region": {
                          "city": "Coimbatore"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "E27"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736261100,
                      "arrival": 1736277300
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736261400,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a16a31",
                    "row": 5608646313,
                    "number": {
                      "default": "TR25",
                      "alternative": null
                    },
                    "callsign": "TGW25",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 04:13",
                    "icon": "red",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "red",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736280832,
                        "local": 1736309632
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B789",
                      "text": "Boeing 787-9 Dreamliner"
                    },
                    "registration": "9V-OJE",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76BD45",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/655.png"
                  },
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MEL",
                        "icao": "YMML"
                      },
                      "timezone": {
                        "name": "Australia/Melbourne",
                        "offset": 39600,
                        "abbr": "AEDT",
                        "abbrName": "Australian Eastern Daylight Time",
                        "isDst": true
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "14"
                      },
                      "name": "Melbourne Airport",
                      "position": {
                        "latitude": -37.665794,
                        "longitude": 144.837296,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Melbourne"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "D46"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736249700,
                      "arrival": 1736277900
                    },
                    "real": {
                      "departure": 1736255657,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736280832
                    },
                    "other": {
                      "eta": 1736280832,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608566924,
                    "number": {
                      "default": "HU453",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "738",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Hainan Airlines",
                    "code": {
                      "iata": "HU",
                      "icao": "CHH"
                    },
                    "short": "Hainan Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HAK",
                        "icao": "ZJHK"
                      },
                      "timezone": {
                        "name": "Asia/Chongqing",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "241"
                      },
                      "name": "Haikou Meilan International Airport",
                      "position": {
                        "latitude": 19.934851,
                        "longitude": 110.4589,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Haikou"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G12"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736265000,
                      "arrival": 1736279100
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736265000,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608516952,
                    "number": {
                      "default": "CI5883",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B744",
                      "text": "Boeing 747-409F"
                    },
                    "registration": "B-18718",
                    "country": {
                      "id": 218,
                      "name": "Taiwan",
                      "alpha2": "TW",
                      "alpha3": "TWN"
                    },
                    "hex": "899104",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "China Airlines",
                    "code": {
                      "iata": "CI",
                      "icao": "CAL"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/86.png"
                  },
                  "airline": {
                    "name": "China Airlines Cargo",
                    "code": {
                      "iata": "CI",
                      "icao": "CAL"
                    },
                    "short": "China Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TPE",
                        "icao": "RCTP"
                      },
                      "timezone": {
                        "name": "Asia/Taipei",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": "511"
                      },
                      "name": "Taipei Taoyuan International Airport",
                      "position": {
                        "latitude": 25.07773,
                        "longitude": 121.232803,
                        "country": {
                          "name": "Taiwan",
                          "code": "TW",
                          "id": 218
                        },
                        "region": {
                          "city": "Taipei"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736263800,
                      "arrival": 1736280000
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736263200,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608692897,
                    "number": {
                      "default": "6E1017",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A20N",
                      "text": "Airbus A320-251N"
                    },
                    "registration": "VT-IIX",
                    "country": {
                      "id": 102,
                      "name": "India",
                      "alpha2": "IN",
                      "alpha3": "IND"
                    },
                    "hex": "801506",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/783.png"
                  },
                  "airline": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "short": "IndiGo"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BBI",
                        "icao": "VEBS"
                      },
                      "timezone": {
                        "name": "Asia/Kolkata",
                        "offset": 19800,
                        "abbr": "IST",
                        "abbrName": "India Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Bhubaneswar Biju Patnaik International Airport",
                      "position": {
                        "latitude": 20.24436,
                        "longitude": 85.81778,
                        "country": {
                          "name": "India",
                          "code": "IN",
                          "id": 102
                        },
                        "region": {
                          "city": "Bhubaneswar"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "F50"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736265600,
                      "arrival": 1736280600
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608508582,
                    "number": {
                      "default": "BS307",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "738",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "US-Bangla Airlines",
                    "code": {
                      "iata": "BS",
                      "icao": "UBG"
                    },
                    "short": "US-Bangla Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "DAC",
                        "icao": "VGHS"
                      },
                      "timezone": {
                        "name": "Asia/Dhaka",
                        "offset": 21600,
                        "abbr": "+06",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Dhaka Shahjalal International Airport",
                      "position": {
                        "latitude": 23.84333,
                        "longitude": 90.397781,
                        "country": {
                          "name": "Bangladesh",
                          "code": "BD",
                          "id": 19
                        },
                        "region": {
                          "city": "Dhaka"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "A3"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736266500,
                      "arrival": 1736281500
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608637700,
                    "number": {
                      "default": "SQ441",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "738",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KTM",
                        "icao": "VNKT"
                      },
                      "timezone": {
                        "name": "Asia/Kathmandu",
                        "offset": 20700,
                        "abbr": "+0545",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Kathmandu Tribhuvan International Airport",
                      "position": {
                        "latitude": 27.696581,
                        "longitude": 85.3591,
                        "country": {
                          "name": "Nepal",
                          "code": "NP",
                          "id": 154
                        },
                        "region": {
                          "city": "Kathmandu"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "F40"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736263500,
                      "arrival": 1736281500
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608692876,
                    "number": {
                      "default": "6E1005",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A20N",
                      "text": "Airbus A320-251N"
                    },
                    "registration": "VT-IPF",
                    "country": {
                      "id": 102,
                      "name": "India",
                      "alpha2": "IN",
                      "alpha3": "IND"
                    },
                    "hex": "80152F",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/783.png"
                  },
                  "airline": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "short": "IndiGo"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BLR",
                        "icao": "VOBL"
                      },
                      "timezone": {
                        "name": "Asia/Kolkata",
                        "offset": 19800,
                        "abbr": "IST",
                        "abbrName": "India Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "D1"
                      },
                      "name": "Bengaluru Kempegowda International Airport",
                      "position": {
                        "latitude": 13.198889,
                        "longitude": 77.705559,
                        "country": {
                          "name": "India",
                          "code": "IN",
                          "id": 102
                        },
                        "region": {
                          "city": "Bengaluru"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": "9T2",
                        "gate": "E24"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736264700,
                      "arrival": 1736281800
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736264700,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5609146210,
                    "number": {
                      "default": "8K804",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "73P",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "K-Mile Air",
                    "code": {
                      "iata": "8K",
                      "icao": "KMI"
                    },
                    "short": "K-Mile Air"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BKK",
                        "icao": "VTBS"
                      },
                      "timezone": {
                        "name": "Asia/Bangkok",
                        "offset": 25200,
                        "abbr": "+07",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Bangkok Suvarnabhumi Airport",
                      "position": {
                        "latitude": 13.6811,
                        "longitude": 100.7472,
                        "country": {
                          "name": "Thailand",
                          "code": "TH",
                          "id": 221
                        },
                        "region": {
                          "city": "Bangkok"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736272800,
                      "arrival": 1736281800
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1966a",
                    "row": 5608587368,
                    "number": {
                      "default": "KZ235",
                      "alternative": null
                    },
                    "callsign": "NCA235",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 05:17",
                    "icon": "yellow",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "yellow",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736284672,
                        "local": 1736313472
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B748",
                      "text": "Boeing 747-8KZF"
                    },
                    "registration": "JA18KZ",
                    "country": {
                      "id": 111,
                      "name": "Japan",
                      "alpha2": "JP",
                      "alpha3": "JPN"
                    },
                    "hex": "8478AB",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Nippon Cargo Airlines",
                    "code": {
                      "iata": "KZ",
                      "icao": "NCA"
                    },
                    "logo": null
                  },
                  "airline": {
                    "name": "Nippon Cargo Airlines",
                    "code": {
                      "iata": "KZ",
                      "icao": "NCA"
                    },
                    "short": "Nippon Cargo Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "NRT",
                        "icao": "RJAA"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Tokyo Narita International Airport",
                      "position": {
                        "latitude": 35.764721,
                        "longitude": 140.386307,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Tokyo"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736257200,
                      "arrival": 1736282100
                    },
                    "real": {
                      "departure": 1736259341,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736284672
                    },
                    "other": {
                      "eta": 1736284672,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608638331,
                    "number": {
                      "default": "SQ7601",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "74Y",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "NRT",
                        "icao": "RJAA"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Tokyo Narita International Airport",
                      "position": {
                        "latitude": 35.764721,
                        "longitude": 140.386307,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Tokyo"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736257200,
                      "arrival": 1736282100
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5609060139,
                    "number": {
                      "default": "BR6061",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "77X",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "EVA Air",
                    "code": {
                      "iata": "BR",
                      "icao": "EVA"
                    },
                    "short": "EVA Air"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TPE",
                        "icao": "RCTP"
                      },
                      "timezone": {
                        "name": "Asia/Taipei",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Taipei Taoyuan International Airport",
                      "position": {
                        "latitude": 25.07773,
                        "longitude": 121.232803,
                        "country": {
                          "name": "Taiwan",
                          "code": "TW",
                          "id": 218
                        },
                        "region": {
                          "city": "Taipei"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736266200,
                      "arrival": 1736282700
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608577978,
                    "number": {
                      "default": "JQ99",
                      "alternative": null
                    },
                    "callsign": "JST99",
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A21N",
                      "text": "Airbus A321-251NX"
                    },
                    "registration": "VH-OFP",
                    "country": {
                      "id": 14,
                      "name": "Australia",
                      "alpha2": "AU",
                      "alpha3": "AUS"
                    },
                    "hex": "7C47A3",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Jetstar",
                    "code": {
                      "iata": "JQ",
                      "icao": "JST"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/205.png"
                  },
                  "airline": {
                    "name": "Jetstar",
                    "code": {
                      "iata": "JQ",
                      "icao": "JST"
                    },
                    "short": "Jetstar"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PER",
                        "icao": "YPPH"
                      },
                      "timezone": {
                        "name": "Australia/Perth",
                        "offset": 28800,
                        "abbr": "AWST",
                        "abbrName": "Australian Western Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "52"
                      },
                      "name": "Perth Airport",
                      "position": {
                        "latitude": -31.940201,
                        "longitude": 115.966904,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Perth"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G17"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736264100,
                      "arrival": 1736283300
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736264400,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1a188",
                    "row": 5608637605,
                    "number": {
                      "default": "SQ605",
                      "alternative": null
                    },
                    "callsign": "SIA605",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 04:37",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736282240,
                        "local": 1736311040
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SHQ",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD11",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "ICN",
                        "icao": "RKSI"
                      },
                      "timezone": {
                        "name": "Asia/Seoul",
                        "offset": 32400,
                        "abbr": "KST",
                        "abbrName": "Korea Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Seoul Incheon International Airport",
                      "position": {
                        "latitude": 37.46907,
                        "longitude": 126.4505,
                        "country": {
                          "name": "South Korea",
                          "code": "KR",
                          "id": 207
                        },
                        "region": {
                          "city": "Seoul"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "B8"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259300,
                      "arrival": 1736283300
                    },
                    "real": {
                      "departure": 1736260481,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736282240
                    },
                    "other": {
                      "eta": 1736282240,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a19f4e",
                    "row": 5608580803,
                    "number": {
                      "default": "KE647",
                      "alternative": null
                    },
                    "callsign": "KAL647",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 04:37",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736282240,
                        "local": 1736311040
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A333",
                      "text": "Airbus A330-323"
                    },
                    "registration": "HL8001",
                    "country": {
                      "id": 207,
                      "name": "South Korea",
                      "alpha2": "KR",
                      "alpha3": "KOR"
                    },
                    "hex": "71C001",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Korean Air",
                    "code": {
                      "iata": "KE",
                      "icao": "KAL"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/91.png"
                  },
                  "airline": {
                    "name": "Korean Air",
                    "code": {
                      "iata": "KE",
                      "icao": "KAL"
                    },
                    "short": "Korean Air"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "ICN",
                        "icao": "RKSI"
                      },
                      "timezone": {
                        "name": "Asia/Seoul",
                        "offset": 32400,
                        "abbr": "KST",
                        "abbrName": "Korea Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Seoul Incheon International Airport",
                      "position": {
                        "latitude": 37.46907,
                        "longitude": 126.4505,
                        "country": {
                          "name": "South Korea",
                          "code": "KR",
                          "id": 207
                        },
                        "region": {
                          "city": "Seoul"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": "G19"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736259000,
                      "arrival": 1736283600
                    },
                    "real": {
                      "departure": 1736259986,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736282240
                    },
                    "other": {
                      "eta": 1736282240,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a17c50",
                    "row": 5608637184,
                    "number": {
                      "default": "SQ246",
                      "alternative": null
                    },
                    "callsign": "SIA246",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 04:58",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736283520,
                        "local": 1736312320
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SHW",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD17",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "BNE",
                        "icao": "YBBN"
                      },
                      "timezone": {
                        "name": "Australia/Brisbane",
                        "offset": 36000,
                        "abbr": "AEST",
                        "abbrName": "Australian Eastern Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "I",
                        "baggage": null,
                        "gate": "81"
                      },
                      "name": "Brisbane Airport",
                      "position": {
                        "latitude": -27.388636,
                        "longitude": 153.126251,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Brisbane"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "A2"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736256300,
                      "arrival": 1736283900
                    },
                    "real": {
                      "departure": 1736257006,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736283520
                    },
                    "other": {
                      "eta": 1736283520,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608795383,
                    "number": {
                      "default": "EK9824",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "77X",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Emirates",
                    "code": {
                      "iata": "EK",
                      "icao": "UAE"
                    },
                    "short": "Emirates"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "DWC",
                        "icao": "OMDW"
                      },
                      "timezone": {
                        "name": "Asia/Dubai",
                        "offset": 14400,
                        "abbr": "+04",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Dubai World Central International Airport",
                      "position": {
                        "latitude": 24.88611,
                        "longitude": 55.172222,
                        "country": {
                          "name": "United Arab Emirates",
                          "code": "AE",
                          "id": 234
                        },
                        "region": {
                          "city": "Dubai"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736258700,
                      "arrival": 1736283900
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5609123720,
                    "number": {
                      "default": "TR875",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "32Q",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Scoot",
                    "code": {
                      "iata": "TR",
                      "icao": "TGW"
                    },
                    "short": "Scoot"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TPE",
                        "icao": "RCTP"
                      },
                      "timezone": {
                        "name": "Asia/Taipei",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "B3"
                      },
                      "name": "Taipei Taoyuan International Airport",
                      "position": {
                        "latitude": 25.07773,
                        "longitude": 121.232803,
                        "country": {
                          "name": "Taiwan",
                          "code": "TW",
                          "id": 218
                        },
                        "region": {
                          "city": "Taipei"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "C17"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736266800,
                      "arrival": 1736283900
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736266800,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1a97d",
                    "row": 5608637687,
                    "number": {
                      "default": "SQ623",
                      "alternative": null
                    },
                    "callsign": "SIA623",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B78X",
                      "text": "Boeing 787-10 Dreamliner"
                    },
                    "registration": "9V-SCD",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CC64",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "KIX",
                        "icao": "RJBB"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "28"
                      },
                      "name": "Osaka Kansai International Airport",
                      "position": {
                        "latitude": 34.427299,
                        "longitude": 135.244003,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Osaka"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "F54"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736260200,
                      "arrival": 1736284200
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736260200,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608692870,
                    "number": {
                      "default": "6E1001",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A20N",
                      "text": "Airbus A320-251N"
                    },
                    "registration": "VT-IXF",
                    "country": {
                      "id": 102,
                      "name": "India",
                      "alpha2": "IN",
                      "alpha3": "IND"
                    },
                    "hex": "8016BA",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/783.png"
                  },
                  "airline": {
                    "name": "IndiGo",
                    "code": {
                      "iata": "6E",
                      "icao": "IGO"
                    },
                    "short": "IndiGo"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MAA",
                        "icao": "VOMM"
                      },
                      "timezone": {
                        "name": "Asia/Kolkata",
                        "offset": 19800,
                        "abbr": "IST",
                        "abbrName": "India Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Chennai International Airport",
                      "position": {
                        "latitude": 12.99441,
                        "longitude": 80.180511,
                        "country": {
                          "name": "India",
                          "code": "IN",
                          "id": 102
                        },
                        "region": {
                          "city": "Chennai"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "E27"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736268600,
                      "arrival": 1736284200
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a1903b",
                    "row": 5608637732,
                    "number": {
                      "default": "SQ635",
                      "alternative": null
                    },
                    "callsign": "SIA635",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 05:15",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736284544,
                        "local": 1736313344
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SHG",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD07",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HND",
                        "icao": "RJTT"
                      },
                      "timezone": {
                        "name": "Asia/Tokyo",
                        "offset": 32400,
                        "abbr": "JST",
                        "abbrName": "Japan Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "107A"
                      },
                      "name": "Tokyo Haneda International Airport",
                      "position": {
                        "latitude": 35.55225,
                        "longitude": 139.779602,
                        "country": {
                          "name": "Japan",
                          "code": "JP",
                          "id": 111
                        },
                        "region": {
                          "city": "Tokyo"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "B2"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736258100,
                      "arrival": 1736284500
                    },
                    "real": {
                      "departure": 1736259321,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736284544
                    },
                    "other": {
                      "eta": 1736284544,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a17c09",
                    "row": 5609119325,
                    "number": {
                      "default": "SQ218",
                      "alternative": null
                    },
                    "callsign": "SIA218",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 04:41",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736282496,
                        "local": 1736311296
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SMH",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CDA8",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "MEL",
                        "icao": "YMML"
                      },
                      "timezone": {
                        "name": "Australia/Melbourne",
                        "offset": 39600,
                        "abbr": "AEDT",
                        "abbrName": "Australian Eastern Daylight Time",
                        "isDst": true
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "18"
                      },
                      "name": "Melbourne Airport",
                      "position": {
                        "latitude": -37.665794,
                        "longitude": 144.837296,
                        "country": {
                          "name": "Australia",
                          "code": "AU",
                          "id": 14
                        },
                        "region": {
                          "city": "Melbourne"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "C20"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736256900,
                      "arrival": 1736284500
                    },
                    "real": {
                      "departure": 1736257204,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736282496
                    },
                    "other": {
                      "eta": 1736282496,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608603969,
                    "number": {
                      "default": "MU543",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "B-304D",
                    "country": {
                      "id": 46,
                      "name": "China",
                      "alpha2": "CN",
                      "alpha3": "CHN"
                    },
                    "hex": "781581",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "China Eastern Airlines",
                    "code": {
                      "iata": "MU",
                      "icao": "CES"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/131.png"
                  },
                  "airline": {
                    "name": "China Eastern Airlines",
                    "code": {
                      "iata": "MU",
                      "icao": "CES"
                    },
                    "short": "China Eastern Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "PVG",
                        "icao": "ZSPD"
                      },
                      "timezone": {
                        "name": "Asia/Shanghai",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": "G121"
                      },
                      "name": "Shanghai Pudong International Airport",
                      "position": {
                        "latitude": 31.14337,
                        "longitude": 121.805199,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Shanghai"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": "A17"
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736264100,
                      "arrival": 1736285100
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736264100,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5610215741,
                    "number": {
                      "default": "3U9387",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "321",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Sichuan Airlines",
                    "code": {
                      "iata": "3U",
                      "icao": "CSC"
                    },
                    "short": "Sichuan Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "NNG",
                        "icao": "ZGNN"
                      },
                      "timezone": {
                        "name": "Asia/Chongqing",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Nanning Wuxu International Airport",
                      "position": {
                        "latitude": 22.608259,
                        "longitude": 108.172401,
                        "country": {
                          "name": "China",
                          "code": "CN",
                          "id": 46
                        },
                        "region": {
                          "city": "Nanning"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736272800,
                      "arrival": 1736285100
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5609063391,
                    "number": {
                      "default": "CV9022",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "74F",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Cargolux",
                    "code": {
                      "iata": "CV",
                      "icao": "CLX"
                    },
                    "short": "Cargolux"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "TPE",
                        "icao": "RCTP"
                      },
                      "timezone": {
                        "name": "Asia/Taipei",
                        "offset": 28800,
                        "abbr": "CST",
                        "abbrName": "China Standard Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Taipei Taoyuan International Airport",
                      "position": {
                        "latitude": 25.07773,
                        "longitude": 121.232803,
                        "country": {
                          "name": "Taiwan",
                          "code": "TW",
                          "id": 218
                        },
                        "region": {
                          "city": "Taipei"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736272800,
                      "arrival": 1736285400
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a10435",
                    "row": 5608637355,
                    "number": {
                      "default": "SQ365",
                      "alternative": null
                    },
                    "callsign": "SIA365",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Estimated 05:43",
                    "icon": "green",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "estimated",
                        "type": "arrival",
                        "color": "green",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736286208,
                        "local": 1736315008
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "A359",
                      "text": "Airbus A350-941"
                    },
                    "registration": "9V-SJD",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CD44",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "FCO",
                        "icao": "LIRF"
                      },
                      "timezone": {
                        "name": "Europe/Rome",
                        "offset": 3600,
                        "abbr": "CET",
                        "abbrName": "Central European Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "3",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Rome Leonardo da Vinci Fiumicino Airport",
                      "position": {
                        "latitude": 41.80447,
                        "longitude": 12.25079,
                        "country": {
                          "name": "Italy",
                          "code": "IT",
                          "id": 109
                        },
                        "region": {
                          "city": "Rome"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736243400,
                      "arrival": 1736285700
                    },
                    "real": {
                      "departure": 1736244277,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736286208
                    },
                    "other": {
                      "eta": 1736286208,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": "38a111ec",
                    "row": 5608637639,
                    "number": {
                      "default": "SQ345",
                      "alternative": null
                    },
                    "callsign": "SIA345",
                    "codeshare": null
                  },
                  "status": {
                    "live": true,
                    "text": "Delayed 06:26",
                    "icon": "red",
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "delayed",
                        "type": "arrival",
                        "color": "red",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": 1736288768,
                        "local": 1736317568
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "B77W",
                      "text": "Boeing 777-312(ER)"
                    },
                    "registration": "9V-SWL",
                    "country": {
                      "id": 199,
                      "name": "Singapore",
                      "alpha2": "SG",
                      "alpha3": "SGP"
                    },
                    "hex": "76CEEC",
                    "restricted": false,
                    "serialNo": null,
                    "age": {
                      "availability": true
                    },
                    "availability": {
                      "serialNo": true,
                      "age": true
                    }
                  },
                  "owner": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "logo": "https://images.flightradar24.com/assets/airlines/logotypes/32.png"
                  },
                  "airline": {
                    "name": "Singapore Airlines",
                    "code": {
                      "iata": "SQ",
                      "icao": "SIA"
                    },
                    "short": "Singapore Airlines"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "ZRH",
                        "icao": "LSZH"
                      },
                      "timezone": {
                        "name": "Europe/Zurich",
                        "offset": 3600,
                        "abbr": "CET",
                        "abbrName": "Central European Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "2",
                        "baggage": null,
                        "gate": "E59"
                      },
                      "name": "Zurich Airport",
                      "position": {
                        "latitude": 47.464722,
                        "longitude": 8.549167,
                        "country": {
                          "name": "Switzerland",
                          "code": "CH",
                          "id": 216
                        },
                        "region": {
                          "city": "Zurich"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": null,
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736242500,
                      "arrival": 1736286000
                    },
                    "real": {
                      "departure": 1736246234,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": null,
                      "arrival": 1736288768
                    },
                    "other": {
                      "eta": 1736288768,
                      "duration": null
                    }
                  }
                }
              },
              {
                "flight": {
                  "identification": {
                    "id": null,
                    "row": 5608770456,
                    "number": {
                      "default": "CX659",
                      "alternative": null
                    },
                    "callsign": null,
                    "codeshare": null
                  },
                  "status": {
                    "live": false,
                    "text": "Scheduled",
                    "icon": null,
                    "estimated": null,
                    "ambiguous": false,
                    "generic": {
                      "status": {
                        "text": "scheduled",
                        "type": "arrival",
                        "color": "gray",
                        "diverted": null
                      },
                      "eventTime": {
                        "utc": null,
                        "local": null
                      }
                    }
                  },
                  "aircraft": {
                    "model": {
                      "code": "359",
                      "text": ""
                    },
                    "hex": "",
                    "registration": "",
                    "serialNo": "",
                    "images": null
                  },
                  "owner": null,
                  "airline": {
                    "name": "Cathay Pacific",
                    "code": {
                      "iata": "CX",
                      "icao": "CPA"
                    },
                    "short": "Cathay Pacific"
                  },
                  "airport": {
                    "origin": {
                      "code": {
                        "iata": "HKG",
                        "icao": "VHHH"
                      },
                      "timezone": {
                        "name": "Asia/Hong_Kong",
                        "offset": 28800,
                        "abbr": "HKT",
                        "abbrName": "Hong Kong Time",
                        "isDst": false
                      },
                      "info": {
                        "terminal": "1",
                        "baggage": null,
                        "gate": null
                      },
                      "name": "Hong Kong International Airport",
                      "position": {
                        "latitude": 22.309616,
                        "longitude": 113.916237,
                        "country": {
                          "name": "Hong Kong",
                          "code": "HK",
                          "id": 99
                        },
                        "region": {
                          "city": "Hong Kong"
                        }
                      },
                      "visible": true
                    },
                    "destination": {
                      "timezone": {
                        "name": "Asia/Singapore",
                        "offset": 28800,
                        "abbr": "+08",
                        "abbrName": null,
                        "isDst": false
                      },
                      "info": {
                        "terminal": "4",
                        "baggage": null,
                        "gate": null
                      }
                    },
                    "real": null
                  },
                  "time": {
                    "scheduled": {
                      "departure": 1736271600,
                      "arrival": 1736286000
                    },
                    "real": {
                      "departure": null,
                      "arrival": null
                    },
                    "estimated": {
                      "departure": 1736271600,
                      "arrival": null
                    },
                    "other": {
                      "eta": null,
                      "duration": null
                    }
                  }
                }
              }
            ]
          }
        },
        "weather": {
          "metar": "WSSS 071430Z 36009KT 9999 FEW018 BKN140 26/24 Q1011 NOSIG",
          "time": 1736260200,
          "qnh": 1011,
          "dewpoint": {
            "celsius": 24,
            "fahrenheit": 75
          },
          "humidity": 89,
          "pressure": {
            "hg": 30,
            "hpa": 1011
          },
          "sky": {
            "condition": {
              "text": "Overcast"
            },
            "visibility": {
              "km": 99999000,
              "mi": 62,
              "nmi": 54
            }
          },
          "flight": {
            "category": "VFR"
          },
          "wind": {
            "direction": {
              "degree": 360,
              "text": "From north"
            },
            "speed": {
              "kmh": 18,
              "kts": 10,
              "mph": 11,
              "text": "Mod"
            }
          },
          "temp": {
            "celsius": 26,
            "fahrenheit": 79
          },
          "elevation": {
            "m": 5,
            "ft": 16
          },
          "cached": 1736260431
        },
        "aircraftCount": {
          "ground": 132,
          "onGround": {
            "visible": 24,
            "total": 122
          }
        },
        "runways": [
          {
            "name": "02C",
            "length": {
              "ft": 13123,
              "m": 4000
            },
            "surface": {
              "code": "CONC",
              "name": "Concrete"
            }
          },
          {
            "name": "02L",
            "length": {
              "ft": 13123,
              "m": 4000
            },
            "surface": {
              "code": "CONC",
              "name": "Concrete"
            }
          },
          {
            "name": "02R",
            "length": {
              "ft": 13123,
              "m": 4000
            },
            "surface": {
              "code": "CONC",
              "name": "Concrete"
            }
          },
          {
            "name": "20C",
            "length": {
              "ft": 13123,
              "m": 4000
            },
            "surface": {
              "code": "CONC",
              "name": "Concrete"
            }
          },
          {
            "name": "20L",
            "length": {
              "ft": 13123,
              "m": 4000
            },
            "surface": {
              "code": "CONC",
              "name": "Concrete"
            }
          },
          {
            "name": "20R",
            "length": {
              "ft": 13123,
              "m": 4000
            },
            "surface": {
              "code": "CONC",
              "name": "Concrete"
            }
          }
        ]
      }
    }
  }

  const [data, setData] = useState([{ id: 0, country: '', numberFlight: 0 }]);

  useEffect(()=>{
    setData([]);
  },[])

  const fetchData = async (code: string) => {
    try {
      const response = await fetch(`https://api.flightapi.io/schedule/677df99369603e14ef2fba95?mode=arrivals&iata=${code}&day=1`);
      console.log(response);
      
      if (!response.ok) {
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

      setData(dataRaw.sort((a, b) => a.numberFlight - b.numberFlight));

    } catch (error) {
      window.alert("There was a problem with the fetch operation")
    }
  };

  const fetDataLocal = () => {

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
  }

  const handelSearch = async () => {
    // fetchData(document.getElementById("default-search")?.value);
    fetDataLocal();
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
      <div className="relative overflow-x-auto">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Country</th>
              <th scope="col" className="px-6 py-3"># of Flights</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.country}
                  </th>
                  <td className="px-6 py-4">{item.numberFlight}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}



