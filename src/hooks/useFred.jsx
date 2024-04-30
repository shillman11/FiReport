import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import key from "../../api-key";

export default function useFred() {
  const [fredData, setFredData] = useState({});

  const getData = async () => {
    try {
      const url =
        `https://api.stlouisfed.org/fred/series?series_id=GNPCA&api_key=` +
        key +
        `&file_type=json`;

      console.log(url);
      const dataInfo = await fetch(url);
      const DATA = await dataInfo.json();
      setFredData(DATA);
      console.log(DATA);
    } catch (error) {
      console.error("Error fetching FRED data:", error);
    }
  };

  return { fredData, getData };
}
