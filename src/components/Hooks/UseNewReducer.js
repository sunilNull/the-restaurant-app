import React, { useReducer } from 'react'
import './style.css'
const reducerMethod = (currState, action) => {
    if (action.type === 'INCREMENT') {
        currState += 1;
    }

    if (action.type === 'DECREMENT') {
        currState = currState===0?0:currState-1;
    }
    return currState;
}
const UseNewReducer = () => {
    const [currState, dispatchEvent] = useReducer(reducerMethod, 0);
    return (
        <>
            <div className="center_div">
                <p>{currState}</p>
                <div className="button2" onClick={() => dispatchEvent({type:'INCREMENT'})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
                <div className="button2" onClick={() => dispatchEvent({type:'DECREMENT'})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREMENT
                </div>
            </div>
        </>
    )
}

export default UseNewReducer;
