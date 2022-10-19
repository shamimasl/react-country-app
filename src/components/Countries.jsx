import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

export default function Countries(props) {
  return (
    <section className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
}
