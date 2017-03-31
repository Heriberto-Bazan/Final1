import React, { Component } from 'react';

import { Link } from 'react-router';

import Nava from '../components1/nava';
import Menusucursales from '../components1/menusucursales';

export default class Sucursal extends Component {
  render() {
    return (
      <div>
        <Nava/>
        <Menusucursales/>
      </div>
    );
  }
}
