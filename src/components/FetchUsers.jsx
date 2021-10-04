import React from 'react'
import {connect} from 'react-redux'
import fetchUsers from '../actions/fetchUsers'

class FetchUsers extends React.Component {
  
  getUsers = () => {
    this.props.fetchUsers()
    console.log(this)
  }

  render() {
    return (
      <div className='form-container'>
        <textarea className='tweet-field'rows='6'></textarea>
        <div className='month-day-year'>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className='hour-min-sec'>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>

        {/* will become send button */}
        <button className='send-tweet' onClick={this.getUsers}>Get Users</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchUsers)