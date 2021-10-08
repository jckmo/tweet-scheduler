const updateTweetState = (tweet) => {
  return dispatch => dispatch({type: 'CHANGE_TWEET', currentTweet: tweet})
}

export default updateTweetState