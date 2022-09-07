import {combineReducers} from 'redux';
import {currentUserAuth} from './authentication';

export default combineReducers({
  user: currentUserAuth,
});
