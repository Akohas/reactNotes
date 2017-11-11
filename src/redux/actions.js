import { CREATE_NOTE, DELETE_NOTE, UPDATE_NOTE } from './actionTypes';


export const createNote = id => ({ type: CREATE_NOTE, id });
export const deleteNote = id => ({ type: DELETE_NOTE, id });
export const updateNote = (id, value) => ({ type: UPDATE_NOTE, id, value });

