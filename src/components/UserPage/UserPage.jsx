import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import ReactDOM from 'react-dom';




function UserPage() {
// this component doesn't do much to start, just renders some user reducer info to the DOM

  useEffect(() => {
    dispatch({ type: 'FETCH_CARD' });
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const cards = useSelector((store) => store.cardReducer);
  console.log('cardReducer', cards);
  
  return (
    <main>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
        <h1>Welcome to TechDeck</h1>
      </div>
      <section className="cards">
        {cards.map((card) => {
            return (
              <div key={card.id}>
                <h2>{card.prompt}</h2>
              </div>
            );
          })}
      </section>
    </main>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
