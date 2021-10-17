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
                                    <MenuButton key={props.menuBarItems.indexOf(menuItem)} filterMenuItem={props.filterMenuItem} label={menuItem} />
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
