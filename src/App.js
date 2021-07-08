import React from 'react';
import './App.css';
// import Repeticao from './Repeticao';
// import Condicional from './Condicional';
import Produtos from './Produtos';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       {/* <Repeticao></Repeticao> */}
       <Produtos  numero={10} />
      </header>
    </div>
  );
}

export default App;
