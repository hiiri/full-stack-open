import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
const notes = response.data
console.log(notes)
})

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)
