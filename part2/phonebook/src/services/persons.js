import axios from 'axios'

const addPerson = (newPersonObject) => {
  axios
    .post(`http://localhost:3001/persons/`, newPersonObject)
    .then(response => {
      console.log(response)
    })
    .catch(error =>
      console.log(error)
    )

}

const deletePerson = (id, name) => {
  if (window.confirm(`Delete ${name} ?`)) {
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(error =>
        console.log(error)
      )
    }
}

export default {addPerson, deletePerson}
