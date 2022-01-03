import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';



function UserPage() {
// this component doesn't do much to start, just renders some user reducer info to the DOM
  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_CARDS' });
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const cardReducer = useSelector((store) => store.cardReducer);
  console.log('cardReducer', cardReducer)
  
  return (
    <main>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
        <h1>Welcome to TechDeck</h1>
      </div>
        {/* {cardReducer.map((card) => {
            return <div key={card.id}> {card.prompt}</div>
          })} */}
    </main>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
