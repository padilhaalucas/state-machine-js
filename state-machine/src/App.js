import React from 'react'

import Router from './router'
import Home from './screens/Home/index'

function App() {
  const paths = {
    home: '/',
  }
  
  const routes = [
    { path: paths.home, component: Home },
  ]

  return (
    <Router routes={routes} />
  )
}

export default App
