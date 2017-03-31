//state argument is no application state, only the state
//this reducer is responsible for
//ES6 (state = null)
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
