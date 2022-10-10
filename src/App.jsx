import { CountryItem } from "./components/CountryItem";
import { useFetchCountries } from "./hooks/useFetchCountries";
import './App.css'
function App() {
  
    const paises=useFetchCountries();
    const paisesFinales=paises.countries
    console.log(paises)
    console.log(paisesFinales[0])
    // const paisesFinales=paises.countries;
    
    // console.log(paisesFinales[0].name.official)

    return (
      <div className="App">
        <h1>App paises</h1>
        <div className="countries-container">
            {
              paisesFinales.map((pais)=><CountryItem name={ pais.name } flag={ pais.flag } />)

            }
        </div>
      </div>
    )
}

export default App
