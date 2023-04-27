import CreateComment from "./CreateComment/Index";
import "./Style.css"
function Comments() {
    let toLeft = "<"
    let toRight = ">"
    return (
        <div className="comments">
            <div className="text-part">
                <div className="text">
                    <h2>What Say Our Regular Custjmet</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod fuga impedit, architecto, eaque dolorum vitae/ Maiores quod fuga impedit, architecto, eaque dolorum vitae</p>
 
                </div>
            </div>
            <div className="comm-s">
                <CreateComment
                    stars="5"
                    comm="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod fuga impedit, architecto, eaque dolorum vitae"
                    photo="photo"
                    name="Diana"
                />
                <CreateComment
                    stars="5"
                    comm="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod fuga impedit, architecto, eaque dolorum vitae"
                    photo="photo"
                    name="Diana"
                />
                <CreateComment
                    stars="5"
                    comm="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod fuga impedit, architecto, eaque dolorum vitae"
                    photo="photo"
                    name="Diana"
                />
                <CreateComment
                    stars="5"
                    comm="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod fuga impedit, architecto, eaque dolorum vitae"
                    photo="photo"
                    name="Diana"
                />
            </div>


        </div>
    )
}
export default Comments