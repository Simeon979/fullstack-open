import React from "react"

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

export default Course
