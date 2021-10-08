const appReducer = (state = {currentTweet: '', currentTweetTime: '', currentTweetTimeZone: ''}, action) => {
  switch (action.type) {
    case 'CHANGE_TWEET':
      return {
        ...state,
        currentTweet: action.currentTweet
      }
    case 'TIME':
      return {
        ...state,
        currentTweetTime: action.currentTweetTime
      }
    case 'TIME_ZONE':
      return {
        ...state,
        currentTweetTimeZone: action.currentTweetTimeZone
      }
  
    default:
      return state
  }
}

export default appReducer