
export function Itens ({produtos, adicionaCarrinho}){

  return(
      <div className="todos-produtos">   
         <img src={produtos.imagem} alt=""/>
       <ul>  
        <li>{produtos.name}</li> 
           <li>nome:{produtos.nome}</li>
           <li>valor:{produtos.valor}</li>
           <li><button className="botao" onClick={adicionaCarrinho}>adicionar no carrinho</button></li>
       </ul>
    </div>   
  )
}