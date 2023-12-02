import { useContext } from "react"
import {  CountriesData } from "../context/countriesContext"
import {CountryElement} from "./Country"
export const HomePage=()=>{
    const {filteredCountries,handleSearch}=useContext(CountriesData)
    return (
        <div>
            <h1 className="text-center text-SecondaryColor text-6xl">
                Home Page
            </h1>
            <div className="flex flex-col items-center text-lg">
                <input type="text" placeholder="Country" className="mt-2 bg-slate-500 rounded-md" onChange={handleSearch} />
                {filteredCountries?.map(country=><CountryElement data={country}/> )}
            </div>
        </div>
    )
}