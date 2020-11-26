import {React, useEffect, useState} from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import Weather from './components/Weather'

const App = () => {

  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState({})

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  }

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
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
      <Weather />
    </div>
  )
}

export default App;
