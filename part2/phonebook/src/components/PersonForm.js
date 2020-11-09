import React from 'react'

const PersonForm = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  addNewName
}) => {
  return (
    <div>
    <form>
        name: <input value={newName} onChange={handleNameChange} />
        <br />
        number: <input value={newNumber} onChange={handleNumberChange} />
        <button onClick={addNewName} type="submit">add</button>
    </form>
    </div>

  )
}

export default PersonForm
