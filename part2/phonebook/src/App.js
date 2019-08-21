import React, { useState, useEffect } from 'react'

import phonebookService from "./services/phonebook"

const Notification = ({ message, isError }) => {
  if (message === null) return null

  return (
    <div className={isError ? "error" : "success"}>{message}</div>
  )
}

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

const Person = ({ person, handleDelete }) =>
  <p>{person.name} {person.number} <button onClick={handleDelete(person.id)}>delete</button></p>

const Persons = ({ persons, handleDelete }) => {
  const entryRows = () => persons.map(person => <Person key={person.id} person={person} handleDelete={handleDelete} />)

  return <div>{ entryRows() }</div>
};

const App = () => {
  const [ persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState("")
  const [ newPattern, setNewPattern ] = useState("")
  const [ notif, setNotif ] = useState({message: null, isError: false})

  const displayNotif = (notif) => {
    setNotif(notif)
    setTimeout(() => setNotif({message: null, isError: false}), 5000)
  }

  useEffect(() => {
    phonebookService.getAll()
      .then(response => setPersons(response))
      .catch(err => {
        displayNotif({ message: "there was an error getting phonebook", isError: true })
      })
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
    const exists = persons.find(person => newName === person.name)
    if (!exists) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      phonebookService.create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          displayNotif({message: `Added ${response.name}`, isError: false})
          setNewName("")
          setNewNumber("")
          setNewPattern("")
        })
        .catch(err => displayNotif({message: "There was an error saving the contact", isError: true}))
    } else {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)

      if (confirmUpdate) {
        const updatedPerson = {
        name: exists.name,
        number: newNumber
        }

        phonebookService.update(exists.id, updatedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id === response.id ? response : person))
            setNewName("")
            setNewNumber("")
            setNewPattern("")
          })
          .catch(err => displayNotif({message: `information of ${updatedPerson.name} has already been removed from server`, isError: true}))
        
      } else displayNotif({message: `${newName} already exist`, isError: true})
    }
  }

  const handleDelete = (id) => () => {
    console.log(id)
    const toDelete = personsToShow.find(person => person.id === id)
    const confirmDelete = window.confirm(`Are you sure you want to remove ${toDelete.name}`)

    confirmDelete && phonebookService.deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(err => displayNotif({message: "There was an error deleting the entry", isError: true}))
  }

  return (
    <div>
      <Notification message={notif.message} isError={notif.isError} />
      <h2>Phonebook</h2>
      <Filter newPattern={newPattern} handlePatternChange={handlePatternChange} />
      <h3>add new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleFormSubmit={handleFormSubmit} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App
