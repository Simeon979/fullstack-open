import React, { useState, useEffect } from 'react'
import axios from "axios"

import phonebookService from "./services/phonebook"

const Filter = ({ newPattern, handlePatternChange }) => (
  <form> <label htmlFor="search">filter shown with</label>
    <input id="search" value={newPattern} onChange={handlePatternChange} />
  </form>
)

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, handleFormSubmit}) => (
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
);

const Persons = ({ persons }) => {
  const entryRows = () => persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)

  return <div>{ entryRows() }</div>
};

const App = () => {
  const [ persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState("")
  const [ newPattern, setNewPattern ] = useState("")

  useEffect(() => {
    phonebookService.getAll()
      .then(response => setPersons(response))
      .catch(err => alert("there was an error getting phonebook", err))
  }, [])

  const personsToShow = persons.filter(
    person => {
      const pattern = new RegExp(newPattern, "i")
      return pattern.test(person.name)
    }
  )


  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handlePatternChange = (event) => setNewPattern(event.target.value)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (!persons.find(person => newName === person.name)) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      phonebookService.create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName("")
          setNewNumber("")
          setNewPattern("")
        })
        .catch(err => alert("There was an error saving the contact", err))
    } else {
      alert(`${newName} already exist`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newPattern={newPattern} handlePatternChange={handlePatternChange} />
      <h3>add new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleFormSubmit={handleFormSubmit} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
