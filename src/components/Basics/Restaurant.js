import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi';
import MenuCard from './MenuCard';
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const filterMenuItem = category => {
        const updatedMenu = Menu.filter((item) => {
            return item.category === category
        });
        setMenuData(updatedMenu);
    }
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => { setMenuData(Menu) }}>all</button>
                    <button className="btn-group__item" onClick={() => filterMenuItem('breakfast')}>BreakFast</button>
                    <button className="btn-group__item" onClick={() => filterMenuItem('lunch')}>lunch</button>
                    <button className="btn-group__item" onClick={() => filterMenuItem('dinner')}>dinner</button>
                </div>
            </nav>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
