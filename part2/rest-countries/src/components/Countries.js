import React, { useState, useEffect } from 'react'
import CountryDetails from './CountryDetails'

const Countries = ({ countries, filter }) => {
  const [shownCountries, setShownCountries] = useState()
  useEffect(() => {
    setShownCountries(new Array(countries.length).fill(0))
  }, [countries.length])

  const filteredCountriesId = (Object.keys(countries).filter(
    countryId => countries[countryId].name.toLowerCase()
    .includes(filter.toLowerCase())
  ))

  const toggleShowCountryInfo = (country, id) => {
    const newShownCountries = [...shownCountries]

    newShownCountries[id] = 1 - newShownCountries[id]
    setShownCountries(newShownCountries)
  }

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
            <div key={countryId}>
              {countries[countryId].name}
              <button onClick={() =>
                toggleShowCountryInfo(countries[countryId], parseInt(countryId))}> show
              </button>
              { shownCountries[countryId] ? <CountryDetails country={countries[countryId]} /> : null }
            </div>
          )
        }
      </div>
    )
  }
  else if (filteredCountriesId.length === 1) {
    const country = countries[filteredCountriesId[0]]

    return (
      <CountryDetails country={country} />
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

export default Countries
