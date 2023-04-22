import "./Style.css"

function Picture(props){
    return(
        <div className="main">
            <img src={props.img} height={props.height} width={props.width} />
            <p><small>{props.title}</small></p>
            <p className="bold"><bold>{props.description}</bold></p>
        </div>
    )
}

export default Picture