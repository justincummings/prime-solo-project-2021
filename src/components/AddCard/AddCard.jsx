import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

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
    event.preventDefault();
    console.log('saveCardClicked');
    dispatch({
      type:'CREATE_CARD',
      payload:{ 
        prompt: promptInput,
        response: responseInput,
        category_id: Number(categoryInput)}
    })
    setResponseInput('');
    setCategoryInput(0);
    setPromptInput('');
  }

  return (
    <div className="container">
      <p>Add Card Page</p>
      <form onSubmit={saveCardClick}>
        <textarea
          rows ="10"
          cols ="50"
          placeholder="prompt" 
          value={promptInput}
          onChange={(e) => setPromptInput(e.target.value)}>
        </textarea>
        <br />
        <textarea
          rows ="10"
          cols ="50"
          placeholder="response"
          value={responseInput}
          onChange={(e) => setResponseInput(e.target.value)}>
        </textarea>
        <br />
      <select name="Category" value={categoryInput} onChange={(event) => setCategoryInput(e.target.value)}>
        <option value="1">Interview Prep</option>
        <option value="2">Front-End</option>
        <option value="3">Back-End</option>
        <option value="4">General Tech/Tools</option>
        <option value="5">Code Challenge</option>
      </select>
      <button>Save Flashcard</button>
      </form>
    </div>
  );
}

export default AddCardPage;
