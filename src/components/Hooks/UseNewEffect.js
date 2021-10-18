import React, { useState, useEffect } from 'react'

const UseNewEffect = () => {
    const [dataLabel, setDataLabel] = useState(0)
    useEffect(() => {
        alert("welcome user")
    }, [])
    useEffect(() => {
        document.title = `Chats(${dataLabel})`
    }, )
    return (
        <>
            <div className="center_div">
                <p>{dataLabel}</p>
                <div className="button2" onClick={() => { setDataLabel(dataLabel + 1) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
            </div>
        </>
    )
}

export default UseNewEffect
