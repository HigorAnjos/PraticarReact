import React from 'react';
import Alunos from './../../data/alunos'

export default props => {

  const alunosJsx = Alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id} {aluno.nome} {aluno.nota}
      </li>
    )
  })

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {alunosJsx}
      </ul>
    </div>
  )
}