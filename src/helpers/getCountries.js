export const getCountries = async() => {
    const url=`https://restcountries.com/v3.1/all`;
    const resp = await fetch(url);
    const data= await resp.json();
    const dataFinal=data.countries
    // console.log(data)
    // return data
    // const charactersArr=dataFinal.map(char=>({
    //     id: char.id,
    //     name: char.name,
    //     imgUrl: char.image,
    //     gender:char.gender,
    //     status:char.status,
    //     species:char.species,
    //     origin:char.origin.name,
    // }))
    const countryArr=data.map(country=>({
        name:country.name.common,
        flag:country.flags.png
    }))


    return countryArr
    // return charactersArr

}

