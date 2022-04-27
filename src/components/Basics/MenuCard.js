const MenuCard = props => {
    return (
        <>
            <section className="main-card--cointainer">
                {
                    props.menuData.map((currentDish) => {
                        return (
                            <>
                                <div className="card-container" key={currentDish.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle">{currentDish.id}</span>
                                            <span className="card-author subtle">{currentDish.category}</span>
                                            <h2 className="card-title">{currentDish.name}</h2>
                                            <span className="card-description subtle">{currentDish.description}</span>
                                            <div className="card-read">Read</div>
                                        </div>
                                        <img src={currentDish.image} alt={currentDish.name} className="card-media" />
                                        <span className="card-tag subtle" onClick={() => alert(`${currentDish.name} not available!`)}>Order Now</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MenuCard
