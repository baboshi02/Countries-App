import { useContext } from "react"
import {  CountriesData } from "../context/countriesContext"
export const HomePage=()=>{
    const countries=useContext(CountriesData)
    console.log(countries)
    return (
        <div>
            <h1 className="text-center text-SecondaryColor text-6xl">
                Home Page
            </h1>
            {countries && countries.map(country=><div>{country.name.common}</div> )}
        </div>
    )
}