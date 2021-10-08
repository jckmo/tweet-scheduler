import React from 'react'
import {connect} from 'react-redux'
import updateTweetState from '../actions/updateTweetState.js'
import updateTweetTime from '../actions/updateTweetTime.js'
import updateTweetTimeZone from '../actions/updateTweetTimeZone.js'

class Scheduler extends React.Component {

  testState = () => console.log(this.props)

  handleTweet = e => this.props.updateTweetState(e.target.value)
  handleTime = e => this.props.updateTweetTime(e.target.value)
  handleTimeZone = e => this.props.updateTweetTimeZone(e.target.value)

  render() {
    return (
      <div className='form-container'>
        <label className='tweet-field-title'>enter tweet</label>
          <textarea onChange={e => this.handleTweet(e)}className='tweet-field'rows='6'></textarea>

          {/* will need to change .charCount to separate function to add red borders when over limit */}
            <p className='charCount'>{this.props.currentTweet.length}/280</p>

        <label className='schedule-label'>set schedule</label>
          <div className='time'>
            <label>time</label>
              <input type='time' className='hour-min-sec' onChange={this.handleTime}/>
            <label>time zone</label>
              <select onChange={e => this.handleTimeZone(e)}>
                <option value={null}></option>
                <option value='-5'>Eastern (UTC-5:00)</option>
              </select>
          </div>


        {/* will become send button */}
        <button className='send-tweet' onClick={e => this.sendTweet(e)}>next</button>
        <button className='-tweet' onClick={this.testState}>test</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTweetState: tweet => dispatch(updateTweetState(tweet)),
    updateTweetTime: tweetTime => dispatch(updateTweetTime(tweetTime)),
    updateTweetTimeZone: tweetTimeZone => dispatch(updateTweetTimeZone(tweetTimeZone))
  }
}

const mapStateToProps = state => {
  return {
    currentTweet: state.currentTweet,
    currentTweetTime: state.currentTweetTime,
    currentTweetTimeZone: state.currentTweetTimeZone
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)