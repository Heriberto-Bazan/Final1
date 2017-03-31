import React, { Component } from 'react';
import { Link } from 'react-router';

import Formulario from './formulario';
import Configura from './configura';
import  Formulariolog from '../components1/formulariolog';

export default class Login extends Component {

  render() {
    return (
        <div>
          <Formulariolog/>
        </div>
    );
  }
}
