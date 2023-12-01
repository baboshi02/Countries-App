import { createContext, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

export const CountriesData=createContext(null)

export const CountriesDataProvider=(props)=>{
    const countries=useFetch("https://restcountries.com/v3.1/all")
    return(
        <CountriesData.Provider value={countries}>
            {props.children}
        </CountriesData.Provider>
    )
}