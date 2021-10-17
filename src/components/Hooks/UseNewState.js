import React, { useState } from 'react'
import './style.css'

const UseNewState = () => {
    const [dataLabel, setDataLabel] = useState(0);
    // const incrementData = () => {
    //     setDataLabel(dataLabel + 1)
    // }
    // const decrementData = () => {
    //     setDataLabel(dataLabel === 0 ? 0 : dataLabel - 1)
    // }
    return (
        <>
            <div className="center_div">
                <p>{dataLabel}</p>
                <div className="button2" onClick={() => {setDataLabel(dataLabel + 1)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
                <div className="button2" onClick={() => {setDataLabel(dataLabel === 0 ? 0 : dataLabel - 1)}}>
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

export default UseNewState
