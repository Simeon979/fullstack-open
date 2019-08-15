import React, { useState } from 'react'

const Filter = ({ newPattern, handlePatternChange }) => (
  <form>
    <label htmlFor="search">filter shown with</label>
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
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567" },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState("")
  const [ newPattern, setNewPattern ] = useState("")

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
    console.log(event)
    event.preventDefault()
    if (!persons.find(person => newName === person.name)) {
      setPersons([...persons, {name: newName, number: newNumber}])
      setNewName("")
      setNewNumber("")
      setNewPattern("")
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
