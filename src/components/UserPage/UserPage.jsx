import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import ReactDOM from 'react-dom';
import './CardList.css'
import {Grid, IconButton, Paper, Card, CardContent, CardActions, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <h1>Welcome to TechDeck: {user.username}</h1>
      </div>
      <section className="cardPage">
        <Grid container rowSpacing={1} columnSpacing={{xs: 2, sm: 4, md: 5 }}>
            {cards.map((card) => {
              return (
                <Grid item>
                  <Paper elevation="7">
                    <Flashcard {...card} key={card.id} />
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </section>
    </main>
  );
}

export default UserPage;


function Flashcard(card) {

  useEffect(() => {
    dispatch({ type: 'FETCH_CARD' });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const cards = useSelector((store) => store.cardReducer);
  const [showResponse, setShowResponse] = useState(false);
  const deleteCard = (card_id)=>{
    dispatch({
      type: 'DELETE_CARD',
      payload: card_id
    })
  }

  return (
    <section className="">
      <Card variant="outlined" sx={{ maxWidth: 275, minHeight: 200, textAlign:'center' }}>
        <CardContent>
        <div onClick={() => setShowResponse(!showResponse)}>
          {showResponse?<Typography>{card.response}</Typography>:<Typography>{card.prompt}</Typography>}
        </div>
        </CardContent>
        <CardActions>
        <IconButton variant="outlined" size="small" onClick={() => history.push(`/edit/${card.id}`)}><EditIcon /></IconButton>
          <IconButton variant="outlined" size="small" onClick={() => deleteCard(card.id)}><DeleteIcon /></IconButton>
        </CardActions>
      </Card>
    </section>
    )
}
