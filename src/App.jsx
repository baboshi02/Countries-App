import { CountriesDataProvider } from "./context/countriesContext";
import "./index.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { HomePage } from "./Pages/Home/HomePage";
import { HighestCountries } from "./Pages/HighestCountries/highesCountries";
import { NavBar } from "./Components/navBar";
function App() {
    return (
        <CountriesDataProvider>
                <Router>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/highestcountries" element={<HighestCountries/>}/>
                    </Routes>
                </Router>
        </CountriesDataProvider>
    );
}

export default App;
