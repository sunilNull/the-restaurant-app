import React, { useState } from 'react'
import './style.css'
import MenuItems, { Menu } from './menuApi'
import MenuCard from './MenuCard'
import MenuBar from './MenuBar'
const Restaurant = () => {
    const [menuBarItems, setMenuBarItems] = useState(Menu);

    const [menuData, setMenuData] = useState(MenuItems);

    const filterMenuItem = category => {
        if (category === 'all') {
            setMenuData(MenuItems);
        } else {
            const updatedMenu = MenuItems.filter((item) => {
                return item.category === category
            });
            setMenuData(updatedMenu);
        }
    }
    return (
        <>
            <MenuBar menuBarItems={menuBarItems} filterMenuItem={filterMenuItem} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
