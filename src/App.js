import React, { useState } from 'react';
import './App.css'
import Tasks from './Componentes/Tasks'
import { getByTitle } from '@testing-library/react';


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "swaws",
      completed: false,
    },
    id: "2",
    title: "sas",
    completed: true,
  ])
  return (
    <>
   <div className='container'>
   </div>
   </>
  )
}
export default App;