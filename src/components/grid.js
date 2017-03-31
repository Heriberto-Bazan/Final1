var React = require('react');
var Note = require('./Note'); // El nombre de los componentes debe comenzar con mayúscula!

var Grid = React.createClass({
    render() {
      var notes = this.props.notes.map(function(note, idx){
          return (
              <Note id={note.id} title={note.title} text={note.text} key={note.id} />
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
