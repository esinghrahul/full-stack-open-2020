import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';

const Header = ({heading}) => (
    <h1>{heading}</h1>
)

const Button = ({text, handleClick}) => (
  <button onClick= {handleClick}>{text}</button>
)

const Anecdote = ({text, voteCount}) => (
  <Fragment>
  <p>{text}</p>
  <p>has {voteCount} votes </p>
  </Fragment>
)

const App= (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
  
  const nextAnecdote = () => {
    setSelected(Math.floor((Math.random () * props.anecdotes.length - 1) + 1)) 
  }

  const vote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxIndex = votes.indexOf(Math.max(...votes))

  return(
    <div>
      <Header heading='Anecdote of the day' />
      <Anecdote text= {props.anecdotes[selected]} voteCount = {votes[selected]} />
      <Button handleClick = {nextAnecdote} text= 'Next Anecdote' />
      <Button handleClick= {()=> vote(selected)} text= 'vote' />
      <Header heading= 'Anecdote with most votes' />
      <Anecdote text = {props.anecdotes[maxIndex]} voteCount = {votes[maxIndex]} />
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
  <React.StrictMode>
    <App anecdotes= {anecdotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

