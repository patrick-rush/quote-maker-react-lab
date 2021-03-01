import uuid from 'uuid';

// export default (state = [], action) => {
//   return state;
// }

export default (state = [], action) => {
  let idx
  switch (action.type) {
    case "ADD_QUOTE": 
      return [...state, action.quote];
    case "REMOVE_QUOTE": 
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE": 
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      let upvotedQuote = state[idx];

      return [...state.slice(0, idx),
        Object.assign({}, upvotedQuote, { votes: upvotedQuote.votes += 1 }),
        ...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE": 
      idx = state.findIndex(quote => quote.id === action.quoteId)
      let downvotedQuote = state[idx];

      if (downvotedQuote.votes > 0) {
        return [...state.slice(0, idx),
        Object.assign({}, downvotedQuote, { votes: downvotedQuote.votes -= 1}),
        ...state.slice(idx + 1)]
      } else {
        return state;
      }

    // case "DOWNVOTE_QUOTE"

    default:
      return state;
  }
}