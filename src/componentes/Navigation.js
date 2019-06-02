

import React from 'react'
import {Link} from 'react-router-dom'

const Navegation = _props => {
    return (
<div>
    <div className="jumbotron text-center">
      <h1>GardianoInc</h1> 
      <p>Front-End Development</p> 
      <form>
          <div className="input-group">
          <input type="email" className="form-control" size="50" placeholder="Email Address" required />
          <div className="input-group-btn">
              <button type="button" className="btn btn-danger">Inscreva-se</button>
          </div>
          </div>
      </form>
    </div>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                        
          </button>
          <Link className="navbar-brand" to="/"> <strong>G</strong> </Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li> <Link to='/'> SOBRE NÓS </Link> </li>
            <li> <Link to="/Servicos"> SERVIÇOS </Link> </li>
            <li><Link to="Portfolio"> PORTFOLIO </Link> </li>
            <li><Link to="Preco"> CONTRIBUIÇÃO </Link> </li>
            <li><Link to="Contato"> Contato </Link> </li>
            <li> <Link to="Admin"> Administrativo </Link> </li>
          </ul>
        </div>
      </div>
    </nav>
</div>    
    );
}
export default Navegation;