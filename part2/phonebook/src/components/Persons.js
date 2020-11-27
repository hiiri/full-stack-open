import React from 'react'
import axios from 'axios'
import personService from '../services/persons'

const Persons = ({ persons, filter }) => {

  return (
    <>
      {
        persons.filter(person => person.name.toLowerCase()
        .includes(filter.toLowerCase()))
        .map(
        person =>
          <p
            key={person.name}>{person.name} {person.number}
            <button onClick={() => personService.deletePerson(person.id, person.name)}>delete</button>
          </p>
        )
      }
    </>
  )
}

export default Persons
