import React from 'react'
import If from './if'

export default props => {
  return (
    <div>
      <If test={props.usuario && props.usuario.nome}>
        Seja Bem-Vindo <strong>{props.usuario.nome}</strong>
      </If>
      <If test={!props.usuario || !props.usuario.nome}>
        Seja Bem-Vindo <strong>Amigão!</strong>
      </If>
    </div>
  )
}
