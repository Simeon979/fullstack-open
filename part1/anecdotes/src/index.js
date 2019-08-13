import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  
  const maxIndex = props.anecdotes.length
  const [votes, setVotes] = useState(Array.from({length: maxIndex}, _ => 0))
  const [mostVotedIndex, setMostVotedIndex] = useState(0)

  /*
  const [mostVote, mostVoted] = votes.reduce(
    ([mv, mvd], x, idx) => x >= mv ? [x, idx] : [mv, mvd], [0, 0])

  console.log(mostVoted, mostVote)
  */

  const handleNext = () => setSelected(Math.floor(Math.random() * maxIndex))
  
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    if (votes[mostVotedIndex] <= votes[selected])
      setMostVotedIndex(selected)
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]} <br />has {votes[selected]} votes</p>
      <button onClick={handleNext}>next anecdote</button>
      <button onClick={handleVote}>vote</button>

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[mostVotedIndex]}</p>
      <p>With {votes[mostVotedIndex]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
