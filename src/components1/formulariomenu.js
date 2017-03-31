import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Fomulariomenu extends Component {
  render() {
    return (
<div>
<div>
<header id="header-container">
  <div className="container2">
    <div className="header clearfix">
      <h1 className="text-center">Configuraciones </h1>
    </div>
  </div>
</header>
</div>
      <section id="productos-container">
        <div className="container1">
          <div className="row">
              <div className="col-xs-12 col-md-3 ">
                <div className="list-group filtros-toggle">
                  <a id="filtrosToggle" href="#" className="list-group-item list-group-item-action navbar-toggler hidden-sm-up" data-target="#filtros-container" data-toggle="collapse">
                    <h5 className="list-group-item-heading">Mis datos<i className="fa fa-chevron-down"></i></h5>
                  </a>
                </div>
                  <div id="filtros-container" >
                    <div className="list-group">
                      <a href="" className="list-group-item list-group-item-action active">
                        <h5 className="list-group-item-heading">Configuración</h5>
                      </a>
                      <a href="" className="list-group-item list-group-item-action">
                        Mis Datos
                      </a>
                      <Link to="/sucursal" className="list-group-item list-group-item-action">
                            Sucursales
                      </Link>
                      <a href="#" className="list-group-item list-group-item-action">
                        Avisos
                      </a>
                    </div>
                  </div>
              </div>

            <div className="col-xs-12 col-xl-9">
                <h1 className="text-muted">Mis Datos</h1>
                <form className="form-horizontal" role="form">
                  <div className="form-group">
                    <label forName="ejemplo_email_3" className="col-lg-2 control-label">Nombre</label>
                    <div className="col-lg-10">
                      <input type="email" className="form-control" id="ejemplo_email_3" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label forName="ejemplo_password_3" className="col-lg-2 control-label">Usuario</label>
                  <div className="col-lg-10">
                    <input type="password" className="form-control" id="ejemplo_password_3" placeholder="Contraseña"/>
                  </div>
                  </div>

                <div className="form-group">
                  <div className="col-lg-offset-2 col-lg-10">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox"/> Opción 1
                      </label>
                      <button className="btn btn-lg  btn-primary btn-block" type="submit">Actualizar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
