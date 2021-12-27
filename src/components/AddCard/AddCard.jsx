import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function AddCardPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [category, setCategory] = useState(0);

  const saveCardClick = (event) => {
    event.preventDefault();
    const cardToAdd = {
      prompt: prompt,
      response: response,
      category_id: Number(category)
    }
    dispatch({type:'ADD_FLASHCARD', payload: cardToAdd})
  }

  return (
    <div className="container">
      <p>Add Card Page</p>
      <form>
        <textarea rows ="10" cols ="50" placeholder="prompt" 
          onChange={(event) => setPrompt(event.target.value)}>
        </textarea>
        <br />
        <textarea rows ="10" cols ="50" placeholder="response"
          onChange={(event) => setResponse(event.target.value)}>
        </textarea>
        <br />
      <select name="Category" value={category} onChange={(event) => setCategory(event.target.value)}>
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
