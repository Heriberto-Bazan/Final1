import Calendar from 'react-input-calendar'

import React, { Component } from 'react';
import { Link } from 'react-router';

var Grid = require('./grid');

import Nava from '../components1/nava';

export default class Reloj extends Component {
  render() {
    return (
      <div>
      <Nava />
    <h3>Soy el Tiempo</h3>
      <Calendar format='DD/MM/YYYY' date='4-12-2014' />
      <Grid/>
      </div>
    );
  }
}
