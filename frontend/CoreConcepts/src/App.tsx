import { useState } from 'react'
import Welcome from './assets/components/Welcome'
import './App.css'
import Counter from './assets/components/Counter'

function App() {
  

  return (
    <div>
     <Welcome name='Ali' age={2}/>
     <Counter/>
    </div>
  )
}

export default App
