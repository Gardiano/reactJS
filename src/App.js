

import React, { Component } from 'react';

import Site from './Site'
import Rodape from './componentes/Rodape'
import Contato from './componentes/Contato'

class App extends Component {
  render() {
    return (
      <div className="App">   
        <Site />
        <Contato />
        <Rodape />
        
      </div>      
    );    
  }
}
export default App;