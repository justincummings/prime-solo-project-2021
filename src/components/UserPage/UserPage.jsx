import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./CardList.css";
import {
  Grid,
  IconButton,
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function UserPage() {
  useEffect(() => {
    dispatch({ type: "FETCH_CARD" });
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
        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 4, md: 4 }}
        >
          {cards.map((card) => {
            return (
              <Grid
                item
                sx={{
                  alignContent: "center",
                }}
              >
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
    dispatch({ type: "FETCH_CARD" });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const cards = useSelector((store) => store.cardReducer);
  const [showResponse, setShowResponse] = useState(false);
  const deleteCard = (card_id) => {
    dispatch({
      type: "DELETE_CARD",
      payload: card_id,
    });
  };

  return (
    <section>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          spaceAround: "10px",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            maxWidth: 350,
            minWidth: 350,
            minHeight: 230,
            maxHeight: 230,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <CardContent>
            <div onClick={() => setShowResponse(!showResponse)}>
              {showResponse ? (
                <Typography>{card.response}</Typography>
              ) : (
                <Typography>{card.prompt}</Typography>
              )}
            </div>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "flex-end",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <CardActions>
              <IconButton
                variant="outlined"
                onClick={() => history.push(`/edit/${card.id}`)}
              >
                <EditIcon sx={{ fontSize: 30, color: "green" }} />
              </IconButton>
              <IconButton
                variant="outlined"
                onClick={() => deleteCard(card.id)}
              >
                <DeleteIcon sx={{ fontSize: 30, color: "red" }} />
              </IconButton>
            </CardActions>
          </Box>
        </Card>
      </Box>
    </section>
  );
}
