import { CountryItem } from './components/CountryItem';
import './App.css'
import { useEffect, useState } from 'react';
import { getCountries } from './helpers/getCountries';
import { useFetchCountries } from './hooks/useFetchCountries';
import { ListCountries } from './components/ListCountries';


export const App=()=> {

    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [inputValue, setInputValue] = useState();
    const url='https://restcountries.com/v3.1/all';
    
    
    
      function filterData(data,inputValue) {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(inputValue));
        return filteredData;
      }
    

    const onInputChange=(event)=>{
      setInputValue( event.target.value );
      setCountries(filterData(countries,inputValue))
      
    }
    const onCleanInput=()=>{
      setInputValue('');
      setFilteredCountries(countries);

    }
    const setCountriesFetch=async()=>{
      setCountries(await useFetchCountries());
    }
   
    setCountriesFetch();
    
    

    return (
      <div className="App">
        <h1>App paises</h1>
          <div className="d-flex gap-3 py-4">
            <input 
              type="text" 
              placeholder="search"
              value={ inputValue }
              onChange={ onInputChange }              
              className="form-control"
              style={{maxWidth:'200px'}}
            />
            <button className="btn btn-primary" onClick={ onCleanInput }>Cerrar</button>
          </div>  
      
          <ListCountries countries={ countries }/>

      </div>
    )
}

