import React from 'react'
import './App.css'
const user = {
  firstName: 'hy',
  lastName: 'lalala',
  time: timer
}

const element = (
  <div>
    <h1>
      Hello, {formatName(user)}!
    </h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
)

function timer () {
  const timer = new Date()
  return <h2>{timer}</h2>
}

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}

function App () {
  return (
    element
  )
}

export default App
