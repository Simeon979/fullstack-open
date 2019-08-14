import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => {
  const rows = () => parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)  

  return (
    <div>
      { rows() }
    </div>
  )
};

const Total = ({ parts }) => {
  const total = () => parts.reduce((acc, part) => acc + part.exercises, 0)

   return <p><b>Total of  { total() } exercises</b></p>
};

const Course = ({course}) => (
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
