const updateTweetTimeZone = (tweetTimeZone) => {
  return dispatch => dispatch({type: 'TIME_ZONE', currentTweetTimeZone: tweetTimeZone})
}

export default updateTweetTimeZone