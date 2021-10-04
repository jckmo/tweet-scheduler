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
        <div className='hour-min-sec'>
          <select>
            <option value='01'>01</option>
            <option value='02'></option>
            <option value='03'></option>
            <option value='04'></option>
            <option value='05'></option>
            <option value='06'></option>
            <option value='07'></option>
            <option value='08'></option>
            <option value='09'></option>
            <option value='10'></option>
            <option value='11'></option>
            <option value='12'></option>
            <option value=''></option>
            <option value='05'></option>
          </select>
          <select>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
          <select>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>

        <div className='month-day-year'>
          <select>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
          <select>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
          <select>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
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