import Calendar from 'react-input-calendar'
import React, { Component } from 'react';
import { Link } from 'react-router';

import Nava from '../components1/nava';
var NoteActions = require('../actions/NoteActions');
var NoteStore = require('../stores/NoteStore');
var Grid = require('./grid');

var Reloj = React.createClass({
    getInitialState: function() {
        return {
            notes: []
        };
    },
  render: function() {
        return (
          <div>
          <Nava />
        <h3>Soy el Tiempo</h3>
          <Calendar format='DD/MM/YYYY' date='4-12-2014' />
          <Grid notes={this.state.notes} />
          </div>
        );
    },

    componentDidMount: function() {
        NoteStore.on('change', function(){
            this.setState({
                notes: NoteStore.getAll()
            });
        }.bind(this));

        NoteActions.readNotes();
    }
});

module.exports = Reloj;
