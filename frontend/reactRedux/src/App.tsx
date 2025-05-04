import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/counter'
import UserList from './features/user/userList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <UserList/>
    </>
  )
}

export default App
