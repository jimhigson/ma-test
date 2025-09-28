import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the MA Demo</h1>
      this is the special branch for Auctions!
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          yoo haz clikd {count} timez
        </button>
      </div>
    </>
  )
}

export default App
