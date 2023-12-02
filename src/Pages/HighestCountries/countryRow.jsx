export const CountryRow = (props) => {
    const {data,totalPopulation}=props
    const percentage=(data.population/ totalPopulation)*100
    return (

        <>
            <div>{data.country}</div>
            <div
                style={{ backgroundColor: "orange", width: `${percentage}%` }}
            ></div>
            <div>{data.population.toLocaleString("en-US")}</div>
        </>
    );
};
