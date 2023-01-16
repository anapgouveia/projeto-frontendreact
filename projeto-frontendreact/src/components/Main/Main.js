import Camisas from "../camisas/Camisas"


function Main ({produtos}){
  return(
    produtos.map((produtos, index) => {
      return(
        <Camisas key={index} produtos={produtos}/>
      )

    })

    
      
       
      )
    }
    


  
  

export default Main;