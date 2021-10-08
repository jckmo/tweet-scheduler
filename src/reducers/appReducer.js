const appReducer = (state = {currentTweet: ''}, action) => {
  switch (action.type) {
    case 'CHANGE_TWEET':
      return {
        ...state,
        currentTweet: action.currentTweet
      }
    default:
      return state
  }
}

export default appReducer