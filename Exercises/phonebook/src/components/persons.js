import React from 'react'

const Persons = ({contact}) => (
    <li>
      {contact.name} {contact.number}
    </li>
  )

export default Persons