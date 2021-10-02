import {BACKEND} from '../index'

const fetchUsers = () => {
  return dispatch => {
    fetch(`${BACKEND}/users`)
    .then(response => response.json())
    .then(jsonResponse => {

      // dispatch({type: 'LOGIN', currentUser: jsonResponse.id})
      console.log(jsonResponse)
    })
  }
}

export default fetchUsers