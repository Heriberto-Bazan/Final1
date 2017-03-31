import React, { Component } from 'react';

import { Link } from 'react-router';

import Nava from '../components1/nava'
import Menuoperaciones from '../components1/menuoperaciones'

import Form from './form'
var Grid = require('./grid');

export default class Configura extends Component {
  render() {
    return (
      <div>
        <Nava/>
        <Menuoperaciones/>
      </div>
    );
  }
}
