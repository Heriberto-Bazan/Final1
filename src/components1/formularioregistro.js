import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Fomularioregistro extends Component {
  render() {
    return (
      <div>
        <header idea="header-container">
          <div className='container1'>

            <div className="header clearfix">
              <h3 className="text-muted">Ingresa tus datos</h3>
            </div>

            <div className="jumbotron">
              <form className="form-signin">
                <h2 className="form-signin-heading">Ingresa tus datos</h2>
                  <label forName="inputName" className="sr-only">Ingresa tu Nombre</label>
                    <input type="name" id="inputName" className="form-control" placeholder="Ingresa tu Nombre " autofocus />
                  <label forName="inputEmail" className="sr-only">Ingresa tu correo</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Ingresa Email " />
                  <label forName="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Ingresa Password" />


                  <Link to="/configura" className="btn btn-success">Siguiente</Link>
              </form>
            </div>

          </div>
        </header>
      </div>
    );
  }
}
