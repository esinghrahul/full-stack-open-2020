import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Persons from './components/persons';
import Filter from './components/filter';
import PersonForm from './components/personform';
import axios from 'axios';


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ showAll, setShowAll] = useState(true)
  const [ searchText, setSearchText] = useState('')

  useEffect(()=> {
    axios.get('http://localhost:3001/persons')
      .then(response=> {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personsObject= {
      name: newName,
      number: newNumber
    }
    if(persons.filter(person=> person.name === personsObject.name).length){
      alert(`${newName} is already added to phonebook`)
    }else{
    setPersons(persons.concat(personsObject))
    setNewName('')
    setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const contactsToShow = showAll ? persons : persons.filter(person=> person.name.toLowerCase().includes(searchText.toLowerCase()))

  const handleSearchText = (event) => {
    setSearchText(event.target.value)
    setShowAll(false)
  }

  return (
    <div>
      <Header heading= "Phonebook" />
      search for: <Filter value= {searchText} handleChange= {handleSearchText} />
      <Header heading= "Add New Contact" />
      <PersonForm handleSubmit = {addName} nameValue = {newName} handleNameChange = {handleNameChange} numberValue = {newNumber} handleNumberChange = {handleNumberChange} />
      
      <Header heading= "Numbers" />
      <ul>
        {contactsToShow.map(contact=> <Persons key= {contact.name} contact = {contact} />)}
      </ul>
    </div>
  )
}

export default App;
