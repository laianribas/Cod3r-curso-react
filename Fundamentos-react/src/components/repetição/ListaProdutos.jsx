import React from 'react'
import ListaProdutos from '../../Data/Produto'
import './ListaProdutos.css'

export default props => {
  return (
    <div className="TabelaProdutos">
      <table>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
        {ListaProdutos.map((produto, i) => {
          console.log(i)
          return (
            <tr className={i % 2 === 0 ? 'Par' : 'Impar'}>
              <td>{produto.id}</td>
              <td>{produto.product}</td>
              <td>{produto.price}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
