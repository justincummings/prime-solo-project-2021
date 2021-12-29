import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AddCardPage() {

  useEffect(() => {
    dispatch({ type: 'FETCH_CARD'})
  }, [])

  const dispatch = useDispatch();
  const history = useHistory();
  const cards = useSelector((store) => store.card);

  const [promptInput, setPromptInput] = useState('');
  const [responseInput, setResponseInput] = useState('');
  const [categoryInput, setCategoryInput] = useState(0);

  const saveCardClick = (event) => {
    // event.preventDefault();
    console.log('saveCardClicked');
    dispatch({
      type:'CREATE_CARD',
      payload:{ 
        prompt: promptInput,
        response: responseInput,
        category_id: Number(categoryInput)}
    })
  }

  return (
    <div className="container">
      <p>Add Card Page</p>
      <form>
        <textarea rows ="10" cols ="50" placeholder="prompt" 
          onChange={(event) => setPromptInput(event.target.value)}>
        </textarea>
        <br />
        <textarea rows ="10" cols ="50" placeholder="response"
          onChange={(event) => setResponseInput(event.target.value)}>
        </textarea>
        <br />
      <select name="Category" value={categoryInput} onChange={(event) => setCategoryInput(event.target.value)}>
        <option value="1">Interview Prep</option>
        <option value="2">Front-End</option>
        <option value="3">Back-End</option>
        <option value="4">General Tech/Tools</option>
        <option value="5">Code Challenge</option>
      </select>
      </form>
      <button onClick={saveCardClick}>Save Flashcard</button>
    </div>
  );
}

export default AddCardPage;
