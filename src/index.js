import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/Basicos/Primeiro'
import ComParametro from './components/Basicos/ComParametro'

const element = document.getElementById('root')
ReactDOM.render(
  <div id="app">
    <Primeiro />
    <ComParametro titulo="Nota do Aluno" aluno="Pedro" nota="8,5" />
    <ComParametro titulo="Nota do Aluno" aluno="Maria" nota="8" />
  </div>,
  element
)
