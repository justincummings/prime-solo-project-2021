
const editReducer = (state = {}, action) => {
    if (action.type === 'SET_EDIT_REDUCER') {
        return {
            prompt: action.payload.prompt,
            response: action.payload.response
        }
     } else if (action.type === 'EDIT_CARD_PROMPT'){
        return { ...state, prompt: action.payload }
     } else if (action.type === 'EDIT_CARD_RESPONSE'){
        return { ...state, response: action.payload }
     } else if (action.type === 'CLEAR_EDIT_CARD'){
        return {};
    }
    return state;
}

export default editReducer;