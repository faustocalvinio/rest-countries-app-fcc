export const getCountries = async() => {
    const resp = await fetch('https://restcountries.com/v3.1/all');
    const data= await resp.json();
    const countryArr=await data.map(country=>({
        name:country.name.common,
        flag:country.flags.png
    }))

    return countryArr;
}