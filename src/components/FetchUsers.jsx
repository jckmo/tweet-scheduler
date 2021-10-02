import React from 'react'
// import {connect} from 'react-redux'
import fetchUsers from '../actions/fetchUsers'
class FetchUsers extends React.Component {
  
  getUsers = () => {
    this.props.fetchUsers()
  }

  render() {
    return (
      <>
        <button onClick={this.getUsers}>Get Users</button>
        <div>
  
        </div>
      </>
    )
  }
}

export default FetchUsers