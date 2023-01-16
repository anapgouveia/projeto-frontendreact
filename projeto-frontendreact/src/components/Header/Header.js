import {Container} from "./styled"


function Header(){
  return(
    <div>
      <Container>
      <h1 className="titulo">Camisas Especiais</h1>
      </Container>
      <h4>Filtros</h4>
      <input placeholder="Procurar Camisa" ></input>
      
      

      <select className="select">
                <option value="">Ordenar</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
           
            </select>
      
      <button>pesquisar</button>
    </div>
  )
}

   
export default Header;