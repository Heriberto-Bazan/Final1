var React = require('react');
var NoteActions = require('../actions/NoteActions');
var NoteStore = require('../stores/NoteStore');
var Form = require('./form');
var Grid = require('./grid');


var App1 = React.createClass({
    getInitialState: function() {
        return {
            notes: []
        };
    },
  render: function() {
        return (
            <div id="wrapper">
                <Form />
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

module.exports = App1;
