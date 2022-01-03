/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import If, { Else } from './if'

export default props => {
  return (
    <div>
      <If test={props.usuario && props.usuario.nome}>
        Seja Bem-Vindo <strong>{props.usuario.nome}</strong>
        <Else>
          Seja Bem-Vindo <strong>Amigão!</strong>
        </Else>
      </If>
    </div>
  )
}
