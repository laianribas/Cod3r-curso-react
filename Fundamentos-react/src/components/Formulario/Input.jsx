import React, { useState } from 'react'
import './Input.css'

const Input = props => {
  const [value, setValue] = useState('Inicial')
  return (
    <div className="input">
      <h2>{value}</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <input
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        />
        <input value={value} readOnly />
        <input value={undefined} />
      </div>
    </div>
  )
}

export default Input
