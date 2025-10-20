import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import hitmanLogo from '/hitman.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=DoNW6REtAiu55rGT" target="_blank">
          <img src={hitmanLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Hitman4Hire</h1>
      </div>
      <br/>
      <h2>Voted best hitman hiring service by the New York times, Washington post, and X(the everything app)</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Hire now
        </button>
        <p>
          Hitman4Hire has been operating in the United States since 1945, originally as an independent contractor for the CIA. We have since branched off to do our own beheading and coup de tat operations throughout the globe, offering competitive rates that even the United States Government can't compete with. We democratize terror by bringing hitman operations into the hands of everyday American Citizens.
        </p>
        <p>
          - Manik E.
          CEO
        </p>
      </div>
      <p className="read-the-docs">
        Hitman4Hire is not responsible for any accidental injuries or deaths
      </p>
    </>
  )
}

export default App
