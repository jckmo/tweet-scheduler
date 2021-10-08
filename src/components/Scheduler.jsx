import React from 'react'
import {connect} from 'react-redux'
import updateTweetState from '../actions/updateTweetState.js'

class Scheduler extends React.Component {
  
  sendTweet = e => console.log(e)

  handleTweet = e => this.props.updateTweetState(e.target.value)

  render() {
    return (
      <div className='form-container'>
        <label className='tweet-field-title'>enter tweet</label>
          <textarea onChange={(e) => this.handleTweet(e)}className='tweet-field'rows='6'></textarea>

          {/* will need to change .charCount to separate function to add red borders when over limit */}
            <p className='charCount'>{this.props.currentTweet.length}/280</p>

        <label className='schedule-label'>set schedule</label>
          <div className='time'>
            <label>time</label>
              <input type='time' className='hour-min-sec'/>
            <label>time zone</label>
              <select>
                <option value={null}></option>
                <option value='00'>Eastern (Atlanta)</option>
              </select>
          </div>


        {/* will become send button */}
        <button className='send-tweet' onClick={(e) => this.sendTweet(e)}>next</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTweetState: (tweet) => dispatch(updateTweetState(tweet))
  }
}

const mapStateToProps = state => {
  return {
    currentTweet: state.currentTweet
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)