import "./Style.css"

function Top() {
    return (
        <div className="top">
            <div className="top-elements">
                <div className="logo">
                    <h3>ebRaw</h3>
                </div>

                <div className="search-div">
                    <input type="text" placeholder="Search in 20,000 Product" />
                    <button className="search-btn">Search</button>
                </div>
                <div className="logos">
                    <a href="#">Logo1</a>
                    <a href="#">Logo2</a>
                    <a href="#">Logo3</a>
                </div>
            </div>
        </div>
    )
}
export default Top