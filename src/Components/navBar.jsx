import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex justify-end items-center w-full h-11 bg-gray-700 text-SecondaryColor text-xl pr-2 mb-2">
      <Link to="/">
        <h1 className="mr-3 hover:text-red-300">Home Page</h1>
      </Link>
      <Link to="/highestcountries">
        <h1 className="hover:text-red-300">HighestCountries</h1>
      </Link>
    </div>
  );
};
