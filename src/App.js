

import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Rodape from './componentes/Rodape'
import Contato from './componentes/Contato'
import Navigation from './componentes/Navigation'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Serviços'
import Portfolio from './componentes/Portfolio'
import Preco from './componentes/Preco'
import Admin from './componentes/Admin'

class App extends Component {
  render() {
    return (
     <BrowserRouter >
      <div className="App"> 
      <Navigation />
      
      <Route path='/' exact component = {Inicio} />
      <Route path='/Servicos' component = {Servicos} />
      <Route path="/Portfolio" exact component = {Portfolio} />
      <Route path="/Preco" exact component = {Preco} />
      <Route path="/Contato" exact component = {Contato} />
      <Route path="/Admin" exact component = {Admin} />
      
      <Rodape />         
      </div>
    </BrowserRouter>
    );  
  }
}
export default App;

