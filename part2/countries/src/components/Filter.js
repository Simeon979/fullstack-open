import React from "react"

const Filter = ({ newPattern, handlePatternChange, handleFilterSubmit }) => (
  <form onSubmit={handleFilterSubmit}>
    <label htmlFor="search">find countries</label>
    <input id="search" value={newPattern} onChange={handlePatternChange} />
  </form>
)

export default Filter
