const editReducer = (state = {}, action) => {
    switch (action.type){
        
    case 'SET_EDIT_REDUCER':{
        return action.payload
    }


    default: 
    return {
        prompt: 'test prompt',
        response: 'test response'
    }}
}

export default editReducer;