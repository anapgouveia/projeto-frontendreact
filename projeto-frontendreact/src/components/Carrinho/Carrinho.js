import { useEffect } from "react"
import {Itens} from "../Main/Itens"
import Produtos from "../camisas/Camisas"


export function Carrinho({ carrinho, produtos}) {


    const soma = (car) => {
        let total = 0
        car.map((itens) => {
            total += itens.total
        })
        console.log("função somar")
        return total
    }

    useEffect(() => {
        console.log("carrinho", carrinho)

    }, [carrinho])

    console.log(carrinho)

    return (
     <ContainerCarrinho>
            <Cabecalho><h1>Seus Produtos:</h1></Cabecalho>
            {carrinho.map((Itens) => {
                return <div className="container" key={Itens.id}>
                    {
                        <div className="infos">
                            <img className="imagem" src={Itens.imagens} />
                            <p className="informacoes">
                           <h1>{Itens.nome}</h1>  
                            <li>Quantidade: {Itens.quant}</li> 
                           <li>Valor Unitario: {Itens.preco}</li>
                            <li>Total item: {Itens.total}</li>
                            </p>
                            
                            
                            
                        </div>
                    }
                </div>
            })}
            <p className="total">Total: {soma(carrinho)}</p>
    
        </ContainerCarrinho>
    )
}