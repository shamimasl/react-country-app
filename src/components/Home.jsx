import React from "react";
import Countries from "./Countries";
import Search from "./Search";
import useFetch from "./useFetch";
const url = "https://restcountries.com/v2/all";
export default function Home() {
  const { data, isLoading, error, filteredData, setFilteredData } =
    useFetch(url);
  const handleRemoveCountry = (name) => {
    const filtered = filteredData.filter((country) => country.name !== name);
    setFilteredData(filtered);
  };
  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    const newCountries = data.filter((country) => {
      const countryName = country.name.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredData(newCountries);
  };
  return (
    <>
      <h1 className=" text-black text-3xl font-extrabold text-center my-4 uppercase">
        Country App
      </h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
      {data && (
        <Countries
          countries={filteredData}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </>
  );
}
