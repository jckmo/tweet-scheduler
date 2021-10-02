// import {BACKEND} from '../index.js'

const fetchUsers = () => {
  return dispatch => {
    fetch(`http://localhost:3001/users`)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({type: 'SAVE_USER', user: jsonResponse[0].username})
    })
  }
}

export default fetchUsers