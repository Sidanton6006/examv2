const initialState = {
    myTests: []
}

const TestReducer = (state = initialState, action) => {
    switch (action.type) {        
        default:
            console.log(action.type);
    }
    return state;
}

export default TestReducer;