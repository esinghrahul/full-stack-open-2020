import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = (props) => {
  return(
    <button onClick= {props.handleClick}>{props.children}</button>
  )
}

const History = (props) => {
  if(props.allClicks.length === 0){
    return(
      <div>
        App is used by pressing relevant buttons
      </div>
    )
  }
  return(
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const [counter, setCounter] = useState(0)
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const increment = () =>  setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = () =>  setCounter(0)  
  
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
    left: clicks.left + 1
  }
  setClicks(newClicks)
}
  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  const handleLeft = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRight = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter= {counter} />
      <Button handleClick = {increment}>Click to increase counter</Button>
      <Button handleClick = {reset}>Reset counter</Button>
      <Button handleClick = {decrement}>Click to decrease counter</Button>
      {clicks.left}
      <button onClick= {handleLeftClick}>LeftClick</button>
      <button onClick= {handleRightClick}>RightClick</button>
      {clicks.right}
      <br/>
      {left}
      <Button handleClick = {handleLeft}>Left</Button>
      <Button handleClick= {handleRight}>Right</Button>
      {right}
      <History allClicks= {allClicks} />
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
// serviceWorker.unregister();
