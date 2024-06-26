export const CountryElement = (props) => {
    const { name, capital, flags, languages } = props.data;
    let formatedLanguages = [];
    formatedLanguages = languages && Object.keys(languages);
    return (
        <div className="text-SecondaryColor  bg-gray-700 p-7 rounded-sm mt-4 w-[50%] flex flex-col items-center">
            <div>
                <img src={flags.png}  alt={`"Flag of ${name.common}"`}/>
            </div>
            <h1>Name: {name.common}</h1>
            <h1>Capital:{capital}</h1>
            <h1>Language(s): {formatedLanguages?.join(",")}</h1>
        </div>
    );
};
