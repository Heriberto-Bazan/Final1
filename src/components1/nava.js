import React , { Component } from 'react';
import { Link } from 'react-router';

export default class Nava extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">Login</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="/configura">Configuración <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reloj">Reloj</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/app1">Notas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hellonameinput">Notas</a>
              </li>
              <ul className="nav navbar-nav navbar-right">
              </ul>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
