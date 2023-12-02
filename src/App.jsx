import { CountriesDataProvider } from "./context/countriesContext";
import "./index.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { HomePage } from "./Pages/Home/HomePage";
import { HighestCountries } from "./Pages/HighestCountries/highesCountries";
function App() {
    return (
        <CountriesDataProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/highestcountries" element={<HighestCountries/>}/>
                    </Routes>
                </Router>
        </CountriesDataProvider>
    );
}

export default App;
