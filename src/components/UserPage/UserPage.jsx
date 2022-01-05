import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import ReactDOM from 'react-dom';
import './CardList.css'
import axios from 'axios';

function UserPage() {

  useEffect(() => {
    dispatch({ type: 'FETCH_CARD' });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const cards = useSelector((store) => store.cardReducer);

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
              <Card {...card} key={card.id} />
            );
          })}
      </section>
    </main>
  );
}

export default UserPage;


function Card(card) {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div onClick={() => setShowResponse(!showResponse)}>
      {showResponse?<div>{card.response}</div>:<div >{card.prompt}</div>}
    </div>)
}
