import React from "react"

const Undetailed = ({ name, handleShowClick }) => 
  <>
    <p>{name}<button onClick={handleShowClick}>Show</button></p>
  </>

// will not show hide button if isSingle is true
// i.e when detailed country is show because there is only one result

const Detailed = ({country, handleHideClick, isSingle}) => {
  const {  name, capital, population, languages, flag } = country
  return (
    <div>
      <h2>{name}{!isSingle && <button onClick={handleHideClick}>Hide</button>}</h2>
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

const Countries = ({countriesToShow, handleShowClick, handleHideClick}) => {
  const countryLength = countriesToShow.length

  // chooses how to display a country in a list
  // only pass handlehideclick handler to detailed view in the result of a list
  // also passes isSingle as false to display the hide button
  const chooseView = (country) => {
    if (country.expanded)
      return <Detailed key={country.name} country={country} handleHideClick={handleHideClick} isSingle={false} />
    else
      return <Undetailed key={country.name} name={country.name} handleShowClick={handleShowClick} />
  }

  return (
    <div>
      { (countryLength > 10)
      ? <p>Too many matches, specify another filter</p>
      : countryLength === 1
        // pass isSingle as true to hide the hide button :)
        ? <Detailed country={countriesToShow[0]} isSingle={true} />
        : countriesToShow.map(chooseView)
      }
    </div>
  )
}

export default Countries
