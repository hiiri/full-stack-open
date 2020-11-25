import {React, useEffect, useState} from 'react'
import axios from 'axios'

const Countries = ({ countries, filter }) => {

  const filteredCountriesId = (Object.keys(countries).filter(
    countryId => countries[countryId].name.toLowerCase()
    .includes(filter.toLowerCase())
  ))

  if (filteredCountriesId.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
  else if (filteredCountriesId.length > 1) {
    return (
      <div>
        {
          filteredCountriesId.map(countryId =>
            <p key={countryId}>
              {countries[countryId].name}
            </p>
          )
        }
      </div>
    )
  }
  else if (filteredCountriesId.length === 1) {
    const country = countries[filteredCountriesId[0]]
    console.log(country)
    return (
      <div>
        <h1>{country.name}</h1>
        <p>
          capital {country.capital}
          <br />
          population {country.population}
        </p>
        <h2>languages</h2>
        <ul>
          {country.languages.map(lang =>
            <li key={lang.name}>
              {lang.name}
            </li>
          )}
        </ul>
        <img src={country.flag} width="128px" alt={`flag of ${country.name}`}></img>
      </div>
    )
  }
  else {
    return (
      <div>
        <p>No matches found</p>
      </div>
    )
  }
}

const App = () => {

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState({})

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  }

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log(response.data)
      setCountries(response.data)
    }
    ).catch(error => {
      console.log('Error fetching country data:', error)
    }
    )
  }, [])

  return (
    <div>
      <p>find countries</p><input onChange={onFilterChange} />
      <Countries countries={countries} filter={filter} />
    </div>
  )
}

export default App;
