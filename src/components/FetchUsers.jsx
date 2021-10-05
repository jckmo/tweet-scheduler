import React from 'react'
import {connect} from 'react-redux'
import fetchUsers from '../actions/fetchUsers'

class FetchUsers extends React.Component {
  
  sendTweet = () => {
    console.log(this)
  }

  render() {
    return (
      <div className='form-container'>
        <label className='tweet-field-title'>enter tweet</label>
        <textarea className='tweet-field'rows='6'></textarea>
        <p className='charCount'>{this.props.charCount}0/280</p>

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
        <button className='send-tweet' onClick={this.sendTweet}>next</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchUsers: () => dispatch(fetchUsers())
  }
}

const mapStateToProps = state => {
  return {
    // user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchUsers)