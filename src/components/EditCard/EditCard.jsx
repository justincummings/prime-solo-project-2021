import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { textAlign } from "@mui/system";

function EditCard() {
  const params = useParams();

  useEffect(() => {
    // dispatch to a saga that will populate our
    // editThisCard reducer
    dispatch({
      type: "FETCH_ONE_CARD",
      payload: params.id,
    });
  }, []);

  const history = useHistory();
  const dispatch = useDispatch();
  const cardToEdit = useSelector((store) => store.editReducer);

  const handleCardPromptChange = (e) => {
    dispatch({
      type: "EDIT_CARD_PROMPT",
      payload: e.target.value,
    });
  };
  const handleCardResponseChange = (e) => {
    dispatch({
      type: "EDIT_CARD_RESPONSE",
      payload: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_CARD",
      payload: {
        user_id: params.id,
        prompt: cardToEdit.prompt,
        response: cardToEdit.response,
      },
    });
    dispatch({
      type: "CLEAR_EDIT_CARD",
    });
    history.push("/");
  };

  const handleCancel = (e) => {
    dispatch({
      type: "CLEAR_EDIT_CARD",
    });
    history.push("/");
  };

  return (
    <div>
      <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
            
        }}>
        <br />
        <Typography>Edit Card</Typography>
        <br />
        <form onSubmit={handleSubmit}>
          <textarea
            rows="10"
            cols="50"
            placeholder="prompt"
            value={cardToEdit.prompt || ""}
            onChange={handleCardPromptChange}
          ></textarea>
          <textarea
            rows="10"
            cols="50"
            placeholder="response"
            value={cardToEdit.response || ""}
            onChange={handleCardResponseChange}
          ></textarea>
          <br />
          <button>Update Card</button>
        </form>
        <button onClick={handleCancel}>Cancel</button>
      </Box>
    </div>
  );
}

export default EditCard;
