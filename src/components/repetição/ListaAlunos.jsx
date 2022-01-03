import React from 'react'
import Alunos from '../../Data/Alunos'

export default props => {
  const list = Alunos.map(Alunos => {
    return (
      <li key={Alunos.id}>
        {Alunos.id} ) {Alunos.nome} - {Alunos.nota}
      </li>
    )
  })
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        <li>{list}</li>
      </ul>
    </div>
  )
}
