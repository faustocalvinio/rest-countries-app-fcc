import { CountryItem } from './components/CountryItem';
import './App.css'
import { useEffect, useState } from 'react';
import { useFetchCountries } from './hooks/useFetchCountries';
import { ListCountries } from './components/ListCountries';


export const App=()=> {

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState()
    const [countryQuery, setCountryQuery] = useState("")
    const [searchParam] = useState(["capital", "name"]);
    const [filteredCountries, setFilteredCountries] = useState([])





    useEffect(() => {
      useFetchCountries()
      .then((result) => {
        setIsLoading(false);
        setCountries(result.sort((a,b)=>{
          if(a.name < b.name){
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }));
        console.log("use effect")
      },(error) => {
          setIsLoading(true);
          setError(error);
      }); 
    }, [])
    

    const search=(items)=>{
      return items.filter((item) => {
      return searchParam.some((newItem) => {
      return (
          item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(countryQuery.toLowerCase()) > -1
        );
      });
      });
    }

    const busqueda=(elemento)=> {
      return elemento === countryQuery
    }
    const onInputSearch=(e)=>{
      setCountryQuery(e.target.value.toLowerCase());
      // console.log(e.target.value);
      setFilteredCountries(countries.filter((country)=>country.name==="argentina"))
      console.log(countries.filter(country=>country.name==="argentina"))
  }

    if (error) {
      return (
        <div className="App">
        <h1>App paises</h1>
        <h4>{error.message}</h4>
        </div>
        );   
    } 
    else if (isLoading) {
      return (
        <div className="App">
          <h1>App paises</h1>
        <h4>Loading...</h4>
        </div>
      );
    }      
    else{
        return (
          <div className="App">
            <h1>App paises</h1>
              <div className="d-flex gap-3 py-4">
                <input 
                  type="search" 
                  placeholder="search"
                  className="form-control"
                  style={{width:'100%'}}
                  onChange={(e)=>onInputSearch(e)}
                />
                <button className="btn btn-primary" >Cerrar</button>
              </div>  
              {                
                countryQuery===""? <ListCountries countries={ countries }/> : <ListCountries countries={countries.filter(item=>item.name.toLowerCase().includes(countryQuery))}/>
              }
              


              {/* {search(countries).map((item) => (
                        <li>
                            <article className="card" key={item.callingCodes}>
                                <div className="card-image">
                                    <img src={item.flag} alt={item.name} />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name">{item.name}</h2>
                                    <ol className="card-list">
                                        <li>
                                            population:{" "}
                                            <span>{item.population}</span>
                                        </li>
                                        <li>
                                            Region: <span>{item.region}</span>
                                        </li>
                                        <li>
                                            Capital: <span>{item.capital}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))} */}

          </div>
        )
      }

   
}

