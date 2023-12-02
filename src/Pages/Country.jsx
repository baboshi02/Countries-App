export const CountryElement = (props) => {
    const { name, capital, flags, languages } = props.data;
    let formatedLanguages = [];
    languages && (formatedLanguages = Object.keys(languages));
    return (
        <div className="text-SecondaryColor  bg-gray-700 p-7 rounded-sm mt-4 w-[50%] flex flex-col items-center">
            <div>
                <img src={flags.png} height={10} />
            </div>
            <h1>Name: {name.common}</h1>
            <h1>Capital:{capital}</h1>
            <h1>Languages: {formatedLanguages.join(",")}</h1>
        </div>
    );
};
