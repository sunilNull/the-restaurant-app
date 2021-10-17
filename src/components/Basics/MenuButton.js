import React from 'react'

const MenuButton = props => {
    return (
        <>
            <button className="btn-group__item" onClick={() => { props.filterMenuItem(props.label) }}>{props.label}</button>
        </>
    )
}

export default MenuButton
