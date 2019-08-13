import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral
  
  return (
    <div>
      <h2>Statistics</h2>
      { 
        (total === 0) ?
          <p>No feedback given</p>
        : <table>
            <tbody>
              <Statistic text="good" value={good} />
              <Statistic text="neutral" value={neutral} />
              <Statistic text="bad" value={bad} />
              <tr><td>all</td><td>{good + neutral + bad}</td></tr>
              <tr><td>average</td><td>{(good - bad) / total}</td></tr>
              <tr><td>positive</td><td>{(good / total) * 100}%</td></tr>
            </tbody>
          </table>
      }
    </div>
  )
};

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td><td>{value}</td>
  </tr>
);

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

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
      <Button handleClick={handlePositiveFeedback} text="good" />
      <Button handleClick={handleNeutralFeedback} text="neutral" />
      <Button handleClick={handleNegativeFeedback} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
