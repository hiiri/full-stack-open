import axios from 'axios'

const addPerson = (newPersonObject) => {
  const request = axios.post(`http://localhost:3001/persons/`, newPersonObject)
  return request.then(response => response.data)
}

const deletePerson = (id, name) => {
  if (window.confirm(`Delete ${name} ?`)) {
    const request = axios.delete(`http://localhost:3001/persons/${id}`)
    return request.then(response => response.data)
    }
}
const updatePerson = (newPersonObject, id) => {
  console.log(id)
  const request = axios.put(`http://localhost:3001/persons/${id}`, newPersonObject)
  return request.then(response => response.data)
}


export default {addPerson, deletePerson, updatePerson}
