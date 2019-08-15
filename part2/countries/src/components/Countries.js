import React from "react"

const Undetailed = ({ name }) => <p>{name}</p>

const Detailed = ({country}) => {
  const {  name, capital, population, languages, flag } = country
  return (
    <div>
      <h2>{name}</h2>
      <p>capital: {capital}</p>
      <p>population: {population}</p>
      <h4>languages</h4>
      <ul>
        {languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={flag} alt={`${name} flag`} width="200px" height="auto" />
    </div>
  )
}

const Countries = ({countriesToShow}) => {
  const countryLength = countriesToShow.length
  return (
    <div>
      { (countryLength > 10)
      ? <p>Too many matches, specify another filter</p>
      : countryLength === 1
        ? <Detailed country={countriesToShow[0]} />
        : countriesToShow.map(country => <Undetailed key={country.name} name={country.name} />)
      }
    </div>
  )
}

export default Countries
