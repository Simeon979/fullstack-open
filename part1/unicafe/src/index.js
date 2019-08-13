import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral
  
  if (total === 0) {
    return (
        <div>
          <h2>Statistics</h2>
          <p>No feedback given</p>
        </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad)/(good + bad + neutral)}</p>
      <p>positive {(good / (good + bad + neutral)) * 100}%</p>
    </div>
  )
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlePositiveFeedback = () => setGood(good+1)

  const handleNegativeFeedback = () => setBad(bad + 1)

  const handleNeutralFeedback = () => setNeutral(neutral + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handlePositiveFeedback}>good</button>
      <button onClick={handleNeutralFeedback}>neutral</button>
      <button onClick={handleNegativeFeedback}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
