import React, { useState } from 'react';
import Person from './components/Person'
import Form from './components/Form'
import './App.css';

const App=() =>{
  const [personList, setPersonList] = useState([])

  const submit = person => setPersonList([...personList, person])

  const update = single => setPersonList([...personList.map(person => {
    if (single.id === person.id) return single
    return person
  })])

  const del = single => setPersonList([...personList.filter(person => single.id !== person.id)])

  return (
    <div className='cont'>
      <h1>Individuals on Team</h1>
      <div className='list'>
        {personList.map((person, index) => (
          <Person key={index}
            update={update}
            del={del}
            person={person}
          />
        ))}
      </div>
      <Form submit={submit} />
    </div>
  );
}
  

export default App;
