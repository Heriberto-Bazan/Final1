import React, { Component } from 'react';

import { Link } from 'react-router';

import Nava from '../components1/nava';
import Formulariomenu from '../components1/formulariomenu';

export default class Menu extends Component {
  render() {
    return (
<div>
<Nava/>
<Formulariomenu/>
</div>
    );
  }
}
