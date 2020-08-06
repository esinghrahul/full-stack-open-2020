import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({heading}) =>(
  <React.Fragment>
    <h1>{heading}</h1>
  </React.Fragment>
) 

const Button = ({handleClick, text}) => (
  <button onClick= {handleClick}>{text}</button>
)

const Statistic = ({text, val}) => (
  <React.Fragment>
    <tr>
      <td>{text}</td>
      <td>{val}</td>
    </tr>
  </React.Fragment>
)

const Statistics = ({good, bad, neutral}) =>{
  if(good === 0 && bad === 0 && neutral === 0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
  <table>
    <tbody>
    <Statistic text='Good' val= {good} />
    <Statistic text='Neutral' val={neutral} />
    <Statistic text='Bad' val={bad} />
    <Statistic text= 'All' val= {good + neutral + bad} />
    <Statistic text= 'Average' val= {(good - bad)/ (good + neutral + bad)} />
    <Statistic text= 'Positive' val= {((good * 100) / (good + neutral + bad)) + '%'} />
    </tbody>
  </table>
)
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  return(
    <div>
      <Header heading= 'Give Feedback' />
      <Button handleClick = {handleGood} text= 'Good' />
      <Button handleClick = {handleNeutral} text= 'Neutral' />
      <Button handleClick = {handleBad} text= 'Bad' />
      <Header heading= 'Statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

