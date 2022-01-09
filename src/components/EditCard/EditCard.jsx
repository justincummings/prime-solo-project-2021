import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function EditCard() {
    const params = useParams();
    console.log('params:');
    console.log(params);

    useEffect(() => {
    // dispatch to a saga that will populate our
    // editThisCard reducer
    dispatch({
        type: 'FETCH_ONE_CARD',
        payload: params.user_id
    })
}, [])

    const history = useHistory();
    const dispatch = useDispatch()
    const cardToEdit = useSelector(store => store.editReducer)

    const handleCardPromptChange = (e) => {
    dispatch({
        type: 'EDIT_CARD_PROMPT',
        payload: e.target.value
    })
}
    const handleCardResponseChange = (e) => {
    dispatch({
        type: 'EDIT_CARD_RESPONSE',
        payload: e.target.value
    })
}
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
        type: 'EDIT_CARD',
        payload: {
            user_id: params.user_id,
            prompt: cardToEdit.prompt,
            response: cardToEdit.response
        }
    })
    dispatch({
        type: 'CLEAR_EDIT_CARD'
    })
    history.push('/');
}

    const handleCancel = (e) => {
    dispatch({
        type: 'CLEAR_EDIT_CARD'
    })
    history.push('/');
}

    return (
        <div>
            <h2>Edit FlashCard:</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows ="10" cols ="50" 
                    placeholder="prompt" 
                    value={cardToEdit.prompt || ''}
                    onChange={handleCardPromptChange}>
                </textarea>
                <textarea
                    rows ="10" cols ="50" 
                    placeholder="response" 
                    value={cardToEdit.response || ''}
                    onChange={handleCardResponseChange}>
                </textarea>
        <br />
        <button>Update Card</button>
        </form>

        <button
            onClick={handleCancel}>
            Cancel
        </button>
        </div>
    );
}


export default EditCard;