import React from 'react'
import Header from "./components/Header/Header"
import Produtos from "./camisas.json"
import Main from ".././src/components/Main/Main"



function App() {
  return (
   <div className="App">
    
    <Header/>
    <Main produtos={Produtos}/>

  </div>

    

   
  );
}

export default App;













      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      //   </header> */}