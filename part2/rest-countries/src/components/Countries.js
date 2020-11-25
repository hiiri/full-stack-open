import React, { useState } from 'react'
import CountryDetails from './CountryDetails'

const Countries = ({ countries, filter }) => {
  const [shownCountries, setShownCountries] = useState([new Array(countries.length).fill(0)])

  const filteredCountriesId = (Object.keys(countries).filter(
    countryId => countries[countryId].name.toLowerCase()
    .includes(filter.toLowerCase())
  ))

  const showCountryInfo = (country, id) => {
    const newShownCountries = [...shownCountries]
    newShownCountries[id] = 1
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
      console.log(shownCountries)
      const indices = shownCountries.flatMap((show, countryIdx) => show ? countryIdx : [])

      console.log(indices, 'res')
      const test = shownCountries.map(country => country)
      for (let i = 0; i < test.length; i++) {
        if (test[i] === 1) {
          console.log(countries[i])
        }
      }
    return (
      <div>
        {
          filteredCountriesId.map(countryId =>
            <p key={countryId}>
              {countries[countryId].name}
              <button onClick={() =>
                showCountryInfo(countries[countryId], parseInt(countryId))}> show
              </button>
            </p>
          ),
          <p>
          shownCountries.map(id => {
            <CountryDetails country={countries[id]}/>
          }
          </p>
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