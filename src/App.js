import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Note from './components/Note';
import { Button, Wrapper, Menu, Panel, PanelItem } from './style';
import { createNote, deleteNote, updateNote } from './redux/actions';

const nanoId = require('nano-id');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuOpened: false,
    };
    this.openMenu = this.openMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  openMenu() {
    this.setState({ menuOpened: true });
  }

  hideMenu() {
    this.setState({ menuOpened: false });
  }

  addNote() {
    const { createNote } = this.props;

    createNote(nanoId(13));
  }


  addText(value, count) {
    const { notes } = this.state;
    const updatedNote = { ...notes[count], value };
    const updatedNotes = [...notes];
    updatedNotes[count] = updatedNote;

    this.setState({ notes: updatedNotes });
  }


  render() {
    const { menuOpened } = this.state;
    const { deleteNote, updateNote, notes } = this.props;

    const notesElems = notes.map((item, i) => (<Note
      key={item.id}
      count={i}
      id={item.id}
      value={item.value}
      updateNote={updateNote}
      deleteNote={deleteNote}
    />));

    return (
      <Wrapper>
        <div><Button onClick={this.openMenu}>Открыть меню</Button></div>
        <Panel hide={!menuOpened}>
          <PanelItem key="add" onClick={this.addNote}>Добавить заметку</PanelItem>
          <PanelItem key="hide" onClick={this.hideMenu}>Закрыть меню</PanelItem>
        </Panel>
        <Menu>
          {notesElems}
        </Menu>
      </Wrapper>
    );
  }
}

App.propTypes = {
  createNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createNote: (id) => {
    dispatch(createNote(id));
  },
  deleteNote: (id) => {
    dispatch(deleteNote(id));
  },
  updateNote: (id, text) => {
    dispatch(updateNote(id, text));
  },
});

const mapStateToProps = state => ({ notes: state.notes });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

