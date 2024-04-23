import React from 'react';
import './App.css';
// import UserList from './UserList';
import Login from './views/Login';
import Register from './views/Register';



function App() {

  return (
    <div className="App">
      {/* <h1>User Management</h1>
      <UserList/> */}
      <Login/>
      {/* <Register/> */}
    </div>
  );
}

export default App;
