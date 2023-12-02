import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCountriesData(data));
    }, []);
    return countriesData;
};
