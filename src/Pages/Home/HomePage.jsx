import { useContext } from "react";
import { CountriesData } from "../../context/countriesContext";
import { CountryElement } from "./Country";
export const HomePage = () => {
    const { filteredCountries, handleSearch, countries } =
        useContext(CountriesData);
    const x = filteredCountries || countries;
    const countriesCount = x.length;
    return (
        <div className="mt-14 text-center   ">
            <h1 className="text-center text-SecondaryColor text-6xl">
                All Countries
            </h1>{" "}
            <input
                autoFocus
                type="text"
                placeholder="Country"
                className="mt-2 bg-slate-500 rounded-md text-center"
                onChange={handleSearch}
            />
            <h1 className="text-center text-SecondaryColor text-xl">
                {countriesCount ? (
                    <>{countriesCount} Countries</>
                ) : (
                    <>No country found</>
                )}
            </h1>
            <div className="flex flex-col h-screen w-auto items-center text-lg overflow-scroll">
                {x?.map((country) => (
                    <CountryElement data={country} key={country.name.common} />
                ))}
            </div>
            {/* To do adding dark and light mode to project */}
            {/* Sort coutries Alphabetically */}
        </div>
    );
};
