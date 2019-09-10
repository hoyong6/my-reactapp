import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App.js'
import Index from './views/index.js'
import Assembly from './views/assembly.js'
const Root = () => (
  <Router>
    <Route path='/' component={App} />
    <Route path='/index' component={Index} />
    <Route path='/assembly' component={Assembly} />
  </Router>
)

export default Root
