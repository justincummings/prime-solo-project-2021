import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';



function UserPage() {
// this component doesn't do much to start, just renders some user reducer info to the DOM
  // const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  return (
    <main>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <h1>Welcome to TechDeck</h1>
    </div>
    <section>
    </section>
    </main>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
