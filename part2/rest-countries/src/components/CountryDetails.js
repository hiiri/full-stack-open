import React from 'react'
import Weather from './Weather'

const CountryDetails = ({ country }) => {

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
      <Weather city={country.capital} />
      <br />
    </div>
  )
}

export default CountryDetails
