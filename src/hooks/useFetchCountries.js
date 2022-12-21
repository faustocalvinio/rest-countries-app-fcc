import { getCountries } from "../helpers/getCountries"

export const useFetchCountries = async() => {
  const countries=await getCountries();

  return countries
}
