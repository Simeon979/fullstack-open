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
    <Part part={prop.part1.name} exercises={prop.part1.exercises} />
    <Part part={prop.part2.name} exercises={prop.part2.exercises} />
    <Part part={prop.part3.name} exercises={prop.part3.exercises} />
  </>
);

const Total = (prop) => (
  <>
    <p>Number of exercises {prop.total}</p>
  </>
);

const App = () => {
  const course = "Half Stack application development"
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
