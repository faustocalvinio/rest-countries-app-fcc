import { CountryItem } from "./components/CountryItem";
import './App.css'
import { useEffect, useState } from "react";
import { getCountries } from "./helpers/getCountries";
import { useFetchCountries } from "./hooks/useFetchCountries";
function App() {

    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [inputValue, setInputValue] = useState()
    const url='https://restcountries.com/v3.1/all'
    
    
    
      function filterData(data,inputValue) {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(inputValue))
        //     .indexOf(query.toString().toLocaleLowerCase()) > -1 &&
        //   item.region
        //     .toString()
        //     .toLowerCase()
        //     .indexOf(filter.toString().toLocaleLowerCase()) > -1
        // );
        return filteredData;
      }
    

    const onInputChange=(event)=>{
      setInputValue( event.target.value );
      const test=filterData(filteredCountries,inputValue);
      console.log(test);
      console.log(inputValue);
      setFilteredCountries(filterData(filteredCountries,inputValue))
      
    }
    const onCleanInput=()=>{
      setInputValue('');

    }
    const setCountriesFetch=async()=>{
      setFilteredCountries(await useFetchCountries());
    }
    useEffect(() => {
      setCountriesFetch();   
      
    }, [])
    
    // setCountriesFetch();
    // useEffect(() => {
    //   setCountriesFetch()
    
      
    // }, [inputValue])
    
     
   
    // const probando=filterData(filteredCountries,"argentina","");
    // console.log(probando)
    //  setFilteredCountries(countries.filter(country=>country))

    return (
      <div className="App">
        <h1>App paises</h1>
          <div>
            <input 
              type="text" 
              placeholder="search"
              value={ inputValue }
              onChange={ onInputChange }
            />
            <button onClick={ onCleanInput }>Cerrar</button>
          </div>
         
        

        
        <div className="countries-container">
          {filteredCountries.map((pais)=><CountryItem name={ pais.name } flag={ pais.flag } />)}
        </div>
      </div>
    )
}

export default App
