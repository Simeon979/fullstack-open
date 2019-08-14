import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState("")

  const entryRows = () => persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (!persons.find(person => newName === person.name)) {
      setPersons([...persons, {name: newName, number: newNumber}])
      setNewName("")
      setNewNumber("")
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
          <input id="name" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="number">number:</label>
          <input id="number" value={newNumber} onChange={handleNumberChange} />
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
