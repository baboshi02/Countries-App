import { tenHighestPopulation } from "../../assets/populatedCountries";
import { CountryRow } from "./countryRow";
export const HighestCountries = () => {
  const totalPopulation = tenHighestPopulation[0].population;
  return (
    <div className="text-SecondaryColor">
      <h1 className="text-center  text-6xl">Ten highest Countries</h1>
      <div className=" items-center m-5 ">
        <div className="grid grid-cols-3 bg-slate-700  gap-2 rounded-md p-3 text-gray-300 ">
          {tenHighestPopulation.map((entry) => (
            <CountryRow
              key={entry.country}
              data={entry}
              totalPopulation={totalPopulation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
