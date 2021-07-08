import React from 'react';
import Produtos from './Produtos';

 function Repeticao () {
    function getProdutosListaItem(){
      return Produtos.map(prod => {
        return (
          <div>
            <li key={prod.id}> 
              {prod.id} - {prod.nome} -- R$ {prod.preco}
            </li>
          </div>
          )
      })
    }

    return (
      <div>
        <h2>Repetiçao</h2>
        <ul>
          {getProdutosListaItem()}
        </ul>
      </div>
    )
 }

  export default Repeticao;