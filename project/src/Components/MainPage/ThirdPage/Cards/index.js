import "./Style.css"

function Cards(props) {
    return (
        <div className="card-main">
            <div className="img-div">
                <img src={props.img} />
            </div>
            <div className="description-div">
                <div className="left-part">
                    <p>{props.title}</p>
                    <button>Add to card</button>
                </div>
                <div className="right-part">
                    <span className="stars"></span>
                    <p>{props.cost}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards