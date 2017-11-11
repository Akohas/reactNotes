import React from 'react';
import PropTypes from 'prop-types';

import { NoteStyled, Input, Count, DeleteButton, Button, Form } from '../style';

const RestoreButton = Button.extend`
    margin-left: 20px;
    font-size: 14px;
`;

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      disabled: false,
    };
    this.changeValue = this.changeValue.bind(this);
    this.disableNote = this.disableNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.blur = this.blur.bind(this);
    this.restore = this.restore.bind(this);
  }

  restore() {
    this.setState({ disabled: false, value: '' });
    this.input.value = this.state.value;
  }

  changeValue(evt) {
    this.setState({ value: evt.target.value });
  }

  disableNote() {
    this.setState({ disabled: true, value: this.input.value });
    this.input.value = '';
  }

  updateNote(evt) {
    const { updateNote, id } = this.props;
    const { value } = evt.target;
    if (!value) return;
    updateNote(id, value);
  }

  blur(evt) {
    evt.preventDefault();
    this.input.blur();
  }

  render() {
    const {
      count, deleteNote, id, value,
    } = this.props;
    const { disabled } = this.state;


    return (
      <NoteStyled disabled={disabled}>
        <Form onSubmit={this.blur}>
          <Input
            type="text"
            defaultValue={value}
            onChange={this.changeValue}
            isEmpty={!value}
            disabled={disabled}
            onBlur={this.updateNote}
            innerRef={input => this.input = input}
          />
        </Form>
        <Count>{ count + 1}</Count>
        { disabled ?
            [
              <DeleteButton onClick={() => deleteNote(id)} key="1">
               Удалить окончательно
              </DeleteButton>,
              <RestoreButton onClick={this.restore} key="2">Восстановить заметку</RestoreButton>,

            ]
            :
            <DeleteButton onClick={this.disableNote}>Удалить заметку</DeleteButton>
            }
      </NoteStyled>
    );
  }
}

Note.propTypes = {
  count: PropTypes.number.isRequired,
  deleteNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default Note;

