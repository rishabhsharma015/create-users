import React, { useEffect } from 'react'
import Form from './components/Form'

const App = () => {

  // useEffect(()=>{
  //   localStorage.setItem("users", JSON.stringify([]));
  // }, [])

  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white p-4'>
      <Form/>
    </div>
  )
}

export default App