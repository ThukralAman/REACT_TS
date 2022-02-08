import React from 'react';

enum ActionType {
    INCREMENT,
    DECREMENT
}

type Action = {
    type:ActionType,
    payload?:number
}

type StateType = {
    count:number
}

let initialState:StateType = {
    count:0
}

let countReducer = (state:StateType, action:Action) => {
    switch(action.type) {
        case ActionType.INCREMENT: 
            if(action.payload){
                return {count: state.count + action.payload};    
            } else
                return {count: state.count + 1}
        case ActionType.DECREMENT: 
            return {count:state.count - 1};
        default:
            return state
    }
}

export function ReducerComponent() {
    let[state, dispatch] = React.useReducer(countReducer, initialState);

    function handleIncrement() {
        let action = {"type": ActionType.INCREMENT, payload: 10};
        dispatch(action);
    }
    return <>
        Count : {state.count} <br />
       <button onClick={handleIncrement}>Click</button>
    </>
}