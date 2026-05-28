import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(654615)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }
  
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Count + 1</button>
        <button onClick={handleDecrement}>Count - 1</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
