import React, { useState } from 'react'

const Sam = () => {
    const [value, setValue] = useState('')
    console.log("Sam component value:", value)
  return (
    <div>
        <h2>Sample Component</h2>
        <input 
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something..."
        />
        <p>You typed from Sam: {value}</p>
    </div>
  )
}

export default Sam