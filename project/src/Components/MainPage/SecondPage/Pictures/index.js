import "./Style.css"

function Pictures(props) {
    return (
        <div className="picture-div">
            <img src={props.img} width={100} height={100} />
            <div className="right">
                <p style={{ fontSize: "10px", color: "teal", fontWeight: "bold" }}>{props.collection}</p>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>{props.collectionName}</p>
                <button>Shop Now</button>
            </div>
        </div>
    )
}
export default Pictures