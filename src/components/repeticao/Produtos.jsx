import React from 'react'
import Produtos from './../../data/produtos'
import './Produtos.css'

export default props => {

  const tableProducts = Produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco.toFixed(2)}</td>
      </tr>
    )
  })

  return (
    <div id="center">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>Preco</td>
          </tr>
        </thead>
        <tbody>
          {tableProducts}
        </tbody>
      </table>
    </div>
  )
}