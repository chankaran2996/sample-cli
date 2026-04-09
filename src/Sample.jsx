import React, { useState } from 'react'
import Sam from './sam'

const Sample = () => {
  // State to hold the input value
  const [value, setValue] = useState('')

  // console.log(value)
  console.log("Sample component value:", value)
  return (
    <div>
        <h2>Sample Component</h2>
        <input 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something..."
        />
        <p>You typed from Sample: {value}</p>
        <Sam />
    </div>
  )
}

export default Sample