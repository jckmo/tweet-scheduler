import './stylesheets/App.css';
import React from 'react'
// import { connect } from 'react-redux';

import FetchUsers from './components/FetchUsers.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FetchUsers/>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;