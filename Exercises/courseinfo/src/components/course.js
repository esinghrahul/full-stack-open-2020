import React from 'react'

const Header = (props) => (
    <h1>
      {props.course}
    </h1>
  )
  
  const Part = (props) => (
    <p>
      {props.part} {props.exercises}
    </p>
  )
  
  const Content = ({part}) => (
    <ul>
      <li>
        <Part part= {part.name} exercises= {part.exercises} />
      </li>
    </ul>
  )
  
  const Total = (props) => {
    const exerciseArray= props.parts.map(part=> part.exercises)
    return (
      <h4>
        Total of {exerciseArray.reduce((item,currentValue)=> item + currentValue)} exercises
      </h4>
  )
  }
  
  const Course = ({course}) => (
    <div>
      <Header course = {course.name} />
      {course.parts.map(part=> <Content key={part.id} part={part} />)}
      <Total parts= {course.parts} />
    </div>
  )

  export default Course