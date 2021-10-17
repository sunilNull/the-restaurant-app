import React from 'react'
import MenuButton from './MenuButton'
const MenuBar = props => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        props.menuBarItems.map((menuItem) => {
                            return (
                                <>
                                    <MenuButton filterMenuItem={props.filterMenuItem} label={menuItem.label} />
                                </>
                            )
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default MenuBar
