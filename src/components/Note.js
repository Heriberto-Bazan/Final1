var React = require('react');
var NoteActions = require('../actions/NoteActions');

var Note = React.createClass({
  remove: function() {
        NoteActions.deleteNote(this.props.id);
    },
    render: function() {
        return (
            <div className="note">
                <div className="note-text">
                    <strong>{this.props.title}</strong>
                    <p>{this.props.text}</p>
                    <p>{this.props.id}</p>
                </div>
                <div className="note-toolbar">
                    <a className="note-btn-delete" onClick={this.remove} />
                </div>
            </div>
        );
    }
});
module.exports = Note;
