import React from "react";

export default function Country(props) {
  const { country } = props;
  const { name, flags, capital, population, area } = country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };
  return (
    <div>
      <div className=" bg-slate-600 p-5 shadow-lg rounded-lg hover:scale-105 transform">
        <img className=" h-48 " src={flags.png} alt={name.common} />
        <div className=" text-center mt-2">
          <h3 className=" text-lg font-semibold text-white">Name: {name}</h3>
          <h3 className=" text-lg font-semibold text-white">
            Population: {population}
          </h3>
          <h3 className=" text-lg font-semibold text-white">
            Capital: {capital}
          </h3>
          <h3 className=" text-lg font-semibold text-white">Area: {area}</h3>
          <button
            onClick={() => {
              handleRemoveCountry(name);
            }}
            className=" bg-orange-600 text-center px-4 py-1 rounded-md text-white uppercase mt-2 hover:bg-red-600 focus:outline-none"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
