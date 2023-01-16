import React from "react"



function Camisas ({produtos}){
  return(
    <div>
    <img src={produtos.imagem} alt=""/>
    <ul>
      <li>{produtos.nome}</li>
      <li>{produtos.valor}</li>
    </ul>

    </div>
  )
}

export default Camisas;