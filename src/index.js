import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

const tag = <strong>Olá React!!!</strong>

const element = document.getElementById('root')
ReactDOM.render(<div>{tag}</div>, element)
