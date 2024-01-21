import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <form name='contact' netlify>
        <p>
          <label>Name <input type='text' name='name'/></label>
        </p>
        <p>
          <label>Email <input type="email" name="email"/></label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
        </form>
      </div>
      
    </>
  )
}

export default App
