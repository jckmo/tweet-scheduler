const updateTweetTime = (tweetTime) => {
  return dispatch => dispatch({type: 'TIME', currentTweetTime: tweetTime})
}

export default updateTweetTime