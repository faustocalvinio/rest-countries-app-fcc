import { useEffect, useState } from "react";
import { getCountries } from "../helpers/getCountries";


export const useFetchCountries = () => {
    const [countries, setCountries] = useState([ ])
    
    const getCountriesHook=async()=>{
       const newCountries= await getCountries();
       setCountries(newCountries)
    }

    useEffect( () => {
        getCountriesHook()
        
    }, []);

    return{
        countries,
    }
}
