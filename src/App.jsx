import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <section id="center">
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setCount((count) => count + 1)}
            >
                Count is {count}
            </button>
        </section>
    )
}

export default App
