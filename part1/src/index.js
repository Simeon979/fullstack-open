import React from 'react';
import ReactDOM from 'react-dom';

const Header = (prop) => (
  <>
    <h1>{prop.course}</h1>
  </>
);

const Part = (prop) => (
  <>
    <p>
      {prop.part} {prop.exercises}
    </p>
  </>
);

const Content = (prop) => (
  <>
    <Part part={prop.part[0].name} exercises={prop.part[0].exercises} />
     <Part part={prop.part[1].name} exercises={prop.part[1].exercises} />
      <Part part={prop.part[2].name} exercises={prop.part[2].exercises} />
  </>
);

const Total = (prop) => (
  <>
    <p>Number of exercises {prop.parts.reduce((acc, part) => acc + part.exercises, 0)}</p>
  </>
);

const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {
    name: "Fundamentals of React",
    exercises: 10
    },
    {
    name: "Using props to pass data",
    exercises: 7
    },
    {
    name: "State of a component",
    exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
