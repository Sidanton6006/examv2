const initialState = {
    myTests: [
        {
            code:"01",
            name:"MyNewTest",
            author:"Ya",
            description: "It's a simple test",
            asks:[
                {
                    ask:"1+1=?",
                    answers: [
                        {
                            text:"1",
                            isCorrect:false
                        },
                        {
                            text:"2",
                            isCorrect:true
                        },
                        {
                            text:"3",
                            isCorrect:false
                        },
                        {
                            text:"4",
                            isCorrect:false
                        },
                    ]
                },
                {
                    ask:"1+2=?",
                    answers: [
                        {
                            text:"1",
                            isCorrect:false
                        },
                        {
                            text:"2",
                            isCorrect:false
                        },
                        {
                            text:"3",
                            isCorrect:true
                        },
                        {
                            text:"4",
                            isCorrect:false
                        },
                    ]
                },
                {
                    ask:"1+3=?",
                    answers: [
                        {
                            text:"1",
                            isCorrect:false
                        },
                        {
                            text:"2",
                            isCorrect:false
                        },
                        {
                            text:"3",
                            isCorrect:false
                        },
                        {
                            text:"4",
                            isCorrect:true
                        },
                    ]
                },
            ]
        },
    ],
    currentTest: {},
    username: "",
    currentMark: ""
}

const TestReducer = (state = initialState, action) => {
    switch (action.type) {    
        case "SET_TEST_AND_USERNAME":
            return{
                ...state,
                currentTest: action.payload[0],
                username: action.payload[1]
            }
        default:     
    }
    return state;
}

export default TestReducer;