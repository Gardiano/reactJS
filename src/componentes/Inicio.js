

import React from 'react'
const Inicio = _props => {
    
    return (
<div>     
    
    <div id="about" className="container-fluid">
        <div className="row bg-grey">
            <div className="col-sm-8">                
                <h2>Sobre nossa empresa</h2><br />
                <h4>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</h4> <br />
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>      
                <br />                
              <button className="btn btn-default btn-lg">Entre em contato</button>
              
            </div>
            <div className="col-sm-4">
                <span className="glyphicon glyphicon-signal logo"></span>
                </div>
        </div>    
    </div>
        <div className="container-fluid">
            <div className="row bg-grey">        
                <div className="col-sm-8">
                
                <h2>Our Values</h2><br />
                <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-globe logo mt-5"></span>
                </div> 
            </div>             
        </div>        
    </div>
    );
}

export default Inicio;