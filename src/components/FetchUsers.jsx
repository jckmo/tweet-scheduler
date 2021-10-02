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
      <>
        <button onClick={this.getUsers}>Get Users</button>
      </>
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