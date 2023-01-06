export const getCountries = async() => {
    const resp = await fetch('https://restcountries.com/v3.1/all');
    const data= await resp.json();
    // console.log(data)
    const countryArr=await data.map(country=>({
        name:country.name.common,
        flag:country.flags.png,
        id:country.name.common,
        region:country.region,
        population:country.population,
        capital:country.capital,
    }))
    return countryArr;
}