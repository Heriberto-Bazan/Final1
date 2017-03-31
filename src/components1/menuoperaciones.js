import  React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menuoperaciones extends Component {
  render() {
    return (
      <div>
        <header id="header-container">
          <div className="container1">
            <div className="header clearfix">
              <h3 className="text-muted">Menu de Operaciones</h3>
            </div>

            <div className="row">
         <div className="col-lg-4">
           <h4>Configuración 1</h4>
           <p>Configuración 1</p>
           <p><a className="btn  btn-primary" href="/menu" role="button">1 &raquo;</a></p>
         </div>
         <div className="col-lg-4">
           <h4>Configuración 2</h4>
           <p>Configuración 2</p>
           <p><a className="btn  btn-primary" href="/menu" role="button">2 &raquo;</a></p>
        </div>
         <div className="col-lg-4">
           <h4>Configuración 3</h4>
           <p>Configuración 3</p>
           <p><a className="btn  btn-primary" href="/menu" role="button">3 &raquo;</a></p>
         </div>
         <div className="col-lg-4">
         <h4>Configuración 4</h4>
         <p>Configuración 4</p>
         <p><a className="btn  btn-primary" href="/menu" role="button">4 &raquo;</a></p>
         </div>
         <div className="col-lg-4">
         <h4>Configuración 5</h4>
         <p>Configuración 5</p>
         <p><a className="btn  btn-primary" href="/menu" role="button">5 &raquo;</a></p>
        </div>
         <div className="col-lg-4">
         <h4>Configuración 6</h4>
         <p>Configuración 6</p>
         <p><a className="btn  btn-primary" href="/menu" role="button">6 &raquo;</a></p>
         </div>
       </div>
          </div>
        </header>
      </div>
    );
  }
}
