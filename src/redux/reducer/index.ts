import {combineReducers} from 'redux';
import {currentUserAuth} from './authentication';
import {NotesReducer} from './notes';

export default combineReducers({
  user: currentUserAuth,
  notes: NotesReducer,
});
