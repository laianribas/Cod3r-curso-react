import React from 'react'

import Primeiro from './components/Basicos/Primeiro'
import ComParametro from './components/Basicos/ComParametro'
import Fragmento from './components/Basicos/Fragmento'

export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React 2</h1>
      <Fragmento />
      <ComParametro titulo="Nota do Aluno" aluno="Pedro" nota={8.5} />
      <Primeiro />
    </div>
  )
}
