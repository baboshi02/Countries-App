import { tenHighestPopulation } from "../../assets/populatedCountries";
export const HighestCountries = () => {
    return (
    <div>
        <h1 className="text-center text-SecondaryColor text-6xl">
            Ten highest Countries
        </h1>
        {tenHighestPopulation.map((entry)=><div>{entry.country}</div> )}
    </div>);
};
