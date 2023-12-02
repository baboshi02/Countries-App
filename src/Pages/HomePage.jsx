import { useContext } from "react"
import {  CountriesData } from "../context/countriesContext"
import {CountryElement} from "./Country"
export const HomePage=()=>{
    const countries=useContext(CountriesData)
    return (
        <div>
            <h1 className="text-center text-SecondaryColor text-6xl">
                Home Page
            </h1>
            <div className="flex flex-col items-center text-lg">
                {countries && countries.map(country=><CountryElement data={country}/> )}
            </div>
        </div>
    )
}