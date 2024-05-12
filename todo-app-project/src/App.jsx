import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header'
import List from './component/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <List></List>
  
    </>
  )
}

export default App
