import './App.css'
import React from 'react'

import Primeiro from './components/Basicos/Primeiro'
import ComParametro from './components/Basicos/ComParametro'
import Fragmento from './components/Basicos/Fragmento'
import NumeroAleatorio from './components/Basicos/NumeroAleatorio'
import Card from './components/layout/Card'

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React 2</h1>
      <div className="Wrapper">
        <Card titulo="#04 - Desafio Número Aleatório" color="#FA6900">
          <NumeroAleatorio max={50} min={0} />
        </Card>
        <Card titulo="#03 - Fragment" color="#E94C6F">
          <Fragmento />
        </Card>
        <Card titulo="#02 - Com Paramentro" color="#E8B71A">
          <ComParametro titulo="Nota do Aluno" aluno="Pedro" nota={8.5} />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}
