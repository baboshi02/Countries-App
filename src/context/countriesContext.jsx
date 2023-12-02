import { createContext,useState } from "react";
import { useFetch } from "../Hooks/useFetch";

export const CountriesData=createContext(null)

export const CountriesDataProvider=(props)=>{
    const countries=useFetch("https://restcountries.com/v3.1/all")
    const [filteredCountries,setFilteredCountries]=useState()
    console.log(filteredCountries)
    const handleSearch = (e) => {;
        const text = e.target.value.toUpperCase();
        const Fil_Countries = countries.filter((d) => d.name.common.toUpperCase().includes(text));
        setFilteredCountries(Fil_Countries)
    };
    const values={filteredCountries,handleSearch,countries}
    return(
        <CountriesData.Provider value={values}>
            {props.children}
        </CountriesData.Provider>
    )
}