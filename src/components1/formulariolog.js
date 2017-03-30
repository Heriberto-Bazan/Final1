import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Formulariolog extends Component {
  render() {
    return(
      <div>
        <header id="header-container">
          <div className="container2">

            <div className="header clearfix">
              <img src="Imagenes/gota.jpg" className="img-thumbnail" alt="..." />
              <h3 className="text-muted">Comunicación Interna</h3>
            </div>

          <div className="jumbotron">
            <form  className="form-signin" >
              <h2 className="form-signin-heading">Ingresa tus datos</h2>
                <label forName="inputEmail" className="sr-only">Ingresa tu correo</label>
                  <input type="email" id="inputEmail" className="form-control" placeholder="Ingresa Email" name="email"  autofocus />
                <label forName="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control" placeholder="Ingresa Password" name="name"  />

          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me "/> Recordar
              <Link to="/formulario" >Registarte</Link>
            </label>
          </div>
            <input type="submit" value="Guardar" />
               <Link to="/configura" className="btn  btn-primary">Siguiente</Link>
            </form>
          </div>
          </div>
      </header>
    </div>
   );
  }
}
