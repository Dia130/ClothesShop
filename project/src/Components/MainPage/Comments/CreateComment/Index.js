import "./Style.css"
function CreateComment(props){
    return(
        <div className="comment-name">
            <div className="comment-div">
                <div className="text-div">
                    {props.comm}
                </div>
                <div className="name-div">
                    <span className="photo-s">{props.photo}</span>
                    <span>{props.name}</span>
                </div>
            </div>
        </div>
    )
}

export default CreateComment 