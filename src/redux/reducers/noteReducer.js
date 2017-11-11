import { CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actionTypes';

function notesReducer(state = {}, { type, id, value }) {
  switch (type) {
    case CREATE_NOTE:
      return [...state, { id, value }];
    case DELETE_NOTE:
      return state.filter(item => item.id !== id);
    case UPDATE_NOTE:

      return state.map((item) => {
        if (item.id === id) item.value = value;
        return item;
      });
    default:
      return state;
  }
}
export default notesReducer;

