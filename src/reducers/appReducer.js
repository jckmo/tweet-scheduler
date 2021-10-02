const appReducer = (state = {user: ''}, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      console.log(action.user)
      return {
        ...state,
        user: action.user
      }
    // eslint-disable-next-line
    default:
      return state
  }
}

export default appReducer