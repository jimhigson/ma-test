import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the MA Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          yoo haz clikd {count} timez
        </button>
      </div>
    </>
  )
}

export default App
