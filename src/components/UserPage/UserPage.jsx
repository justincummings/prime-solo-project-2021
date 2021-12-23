import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router';

function UserPage() {

  const dispatch = useDispatch();
  const history = useHistory();

  const goToAddCard = () => {
    history.push('/AddCard')
  }
    

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <h1>Welcome to TechDeck</h1>
      <button onclick={}>Add Card</button>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
