export function selectBook(book){
    //selectBook is an ActionCreator, it needs to return an action,
    //and object with a type property
    return {
      //always
      type: 'BOOK_SELECTED',
      //optional and more properties
      payload: book
    };
}
