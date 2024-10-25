"use client";
import "@/app/globals.css";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CountryName() {
  const { country_name } = useParams()  as { country_name: string };

  const countries = [
    {
      name: "Pakistan",
      population: 2166,
      capital: "Islamabad",
    },
    {
      name: "Italy",
      population: 59280820,
      capital: "Rome",
    },
    {
        name: "Southkorea",
        population: 51701513,
        capital: "Seoul",
      },
      {
        name: "USA",
        population: 346012710,
        capital: "Washington, D.C",
      },
      {
        name: "India",
        population: 765464,
        capital: "Delhi",
      },
  ];

  function findCountry(name: string) {
    return countries.find(
      (country) => name.toLowerCase() === country.name.toLowerCase()
    );
  }

  const result = findCountry(country_name);

  return (
    <div>
      <div>
        {result ? (
          <>
            <h1>Country Name: {result.name}</h1>
            <h1>Country Population: {result.population}</h1>
            <h1>Country Capital: {result.capital}</h1>
          </>
        ) : (
          <h1>
            {country_name} not found in the database. Please check the parameter name in the URL.
          </h1>
        )}
      </div>
      <div>
        <li className="cust_button">
          <Link href="/">Back</Link>
        </li>
      </div>
    </div>
  );
}
