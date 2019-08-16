import React, { useState, useEffect } from 'react';
import axios from "axios"

import Filter from "./components/Filter"
import Countries from "./components/Countries"
import Weather from "./components/Weather"

const App = () => {

  const [newPattern, setNewPattern] = useState("")
  const [countries, setCountries] = useState([])
  const [expanded, setExpanded] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setCountries(response.data))
  }, [])

  const countriesToShow =
    countries
      .filter(country => {
    const pattern = new RegExp(newPattern, "i")
    return pattern.test(country.name)
  })
      .map(country => ({...country, expanded: expanded.includes(country.name)}))

  const handlePatternChange = (event) => {
    setNewPattern(event.target.value)
  }

  const handleFilterSubmit = (event) => {
    event.preventDefault()
    setNewPattern("")
  }

  const handleShowClick = (event) => {
    setExpanded([...expanded, event.target.previousSibling.textContent])
  }

  const handleHideClick = (event) => {
    const country = event.target.previousSibling.textContent
    const newExpanded = expanded.filter(name => name !== country)
    setExpanded(newExpanded)
  }

  return(
    <div>
      <Filter newPattern={newPattern} handlePatternChange={handlePatternChange} handleFilterSubmit={handleFilterSubmit} />
      <Countries countriesToShow={countriesToShow} handleShowClick={handleShowClick} handleHideClick={handleHideClick} />
      { countriesToShow.length === 1 && <Weather name={countriesToShow[0].capital} /> }
    </div>
  )
}

export default App;
