import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("fetching is not successful");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, isLoading, error, filteredData, setFilteredData };
}
