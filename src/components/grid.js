var React = require('react');
var Note = require('./note'); // El nombre de los componentes debe comenzar con mayúscula!

var Grid = React.createClass({

    getInitialState: function() {
        var notes = window.localStorage.getItem('notes');

        if (notes === null) {
            notes = [];
        } else {
            notes = JSON.parse(notes);
        }

        // Recordemos que es necesario devolver un objeto plano,
        // por lo que asignamos nuestro array de notas como propiedad
        return {
            notes: notes
        };
    },

    render: function() {
        var notes = this.state.notes.map(function(note, idx){
            return (
                <Note id={note.id} title={note.title} text={note.text} key={idx} />
            );
        });

        return (
            <div className="grid">
                {notes}
            </div>
        );
    }

});

module.exports = Grid;
