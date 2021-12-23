import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";

function AddCardInput() {
    const dispatch = useDispatch();
    const history = useHistory();
}

//local state storing user input

const [prompt, setPrompt] = useState('');
const [response, setResponse] = useState('');
const [topic, setTopic] = useState(0);