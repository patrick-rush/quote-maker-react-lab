// TODO: Create action creators as defined in tests
export const addQuote = quote => {
    return {
        type: 'ADD_QUOTE',
        quote
    };
};

export const removeQuote = quoteId => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    };
};

  
export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    };
};

export const downvoteQuote = quoteId => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId
    };
};
//   export const removeAuthor = id => {
//     return {
//       type: 'REMOVE_AUTHOR',
//       id
//     };
//   };
  
//   export const addBook = book => {
//     return {
//       type: 'ADD_BOOK',
//       book
//     };
//   };
  
//   export const removeBook = id => {
//     return {
//       type: 'REMOVE_BOOK',
//       id
//     };
//   };