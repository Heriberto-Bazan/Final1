import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Menu from './components/menu';
import Login from './components/login';
import Home from './components/home';
import Configura from './components/configura';
import Sucursal from './components/sucursal';
import Formulario from './components/formulario';
import Reloj from './components/reloj';
import App1 from './components/app1';
import HelloNameInput from './components/hellonameinput';

import { Jumbotron } from 'react-bootstrap';

const Greeting = () => {
  return <Jumbotron>Hola!</Jumbotron>;
};

const Configuracion = () => {
  return <Jumbotron>Título Configuración!</Jumbotron>;
};

const page1 = () => {
  return <Jumbotron>Pag1!</Jumbotron>;
};

const cfg1 = () => {
  return <Jumbotron>Configuración 1!</Jumbotron>;
};

export default (
  <Router>
    <Route path="/" component={Login}>
      <IndexRoute component={Greeting} />
      <Route path="page1" component={page1}/>
    </Route>
    <Route path="/configura" component={Configura}>
    </Route>
    <Route path="/home" component={Home}>
    </Route>
    <Route path="/menu" component={Menu}>
    </Route>
    <Route path="/sucursal" component={Sucursal}>
    </Route>
    <Route path="/formulario" component={Formulario}>
    </Route>
    <Route path="/reloj" component={Reloj}>
    </Route>
    <Route path="/app1" component={App1}>
    </Route>
    <Route path="/hellonameinput" component={HelloNameInput}>
    </Route>
  </Router>
);
