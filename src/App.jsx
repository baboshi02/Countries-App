import { CountriesDataProvider } from "./context/countriesContext";
import "./index.css";
import { HomePage } from "./Pages/HomePage";
function App() {
    return (
        <CountriesDataProvider>
                <HomePage /> 
        </CountriesDataProvider>
    );
}

export default App;
