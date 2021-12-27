import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";

function AddCardInput() {
    const dispatch = useDispatch();
    const history = useHistory();
}

//local state storing user input for flashcard prompt, response & topic
const [prompt, setPrompt] = useState('');
const [response, setResponse] = useState('');
const [category, setCategory] = useState(0);

//arrow function to return user to home page
const home = () => {
    console.log('home button clicked');
    history.push('/')
}
//defining a const var with arrow function to take user input and make it into an object to be added to DB
const saveCardClick = (event) => {
    console.log('save card clicked');
    event.preventDefault();
    const cardToAdd = {
        prompt: prompt,
        response: response,
        category_id: Number(category)
    }
    console.log('card to add', cardToAdd);
    dispatch({type:'ADD_CARD', payload: cardToAdd})
    home();


return (
    <div>
        <h1>Add Card</h1>
            <form>
            <textarea rows ="5" cols ="50" placeholder="Question/Prompt/Code"
                    onChange={(event) => setPrompt(event.target.value)}></textarea>
                    <br />
                <textarea rows ="5" cols ="50" placeholder="Response"
                    onChange={(event) => setResponse(event.target.value)}></textarea>
                    <br />
                <select name="Category" value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="1">Interview Prep</option>
                    <option value="2">Front-End</option>
                    <option value="3">Back-End</option>
                    <option value="4">General Tech/Tools</option>
                    <option value="5">Code Challenge</option>
                </select>
            </form>
            <button onClick={saveCardClick}>Save Card</button>
            <button onClick={home}>Cancel</button>
        </div>
    );
}
export default AddCardInput;