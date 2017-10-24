import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  //console.log('Action Receaved!', action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
      //SAME AS: state.concat[(action.payload.data)]
  }
  return state;
}