import { tenHighestPopulation } from "../../assets/populatedCountries";
import { CountryRow } from "./countryRow";
export const HighestCountries = () => {
    const totalPopulation = tenHighestPopulation[0].population;
    return (
        <div className="text-SecondaryColor mt-14">
            <h1 className="text-center  text-6xl">Ten highest Countries</h1>
            <div className="flex justify-center items-center mt-5 h-[100vh]">
                <div className="grid grid-cols-3 bg-slate-700 h-[50%] w-[70%] gap-2 rounded-md p-3 text-gray-300 ">
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
