import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const entryRows = () => persons.map(person => <p key={person.name}>{person.name}</p>)

  const handleInputChange = (event) => setNewName(event.target.value)
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (!persons.find(person => newName === person.name)) {
      setPersons([...persons, {name: newName}])
      setNewName("")
    } else {
      alert(`${newName} already exist`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit" onClick={handleFormSubmit} >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { entryRows() }
    </div>
  )
}

export default App
