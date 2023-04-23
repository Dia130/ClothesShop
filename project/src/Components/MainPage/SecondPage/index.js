import "./Style.css"
import img1 from "../../../assets/main-page/SecondPage/1.jpg"
import img2 from "../../../assets/main-page/SecondPage/2.jpg"
import Pictures from "./Pictures"
function SecondPage() {
    return (
        <div className="secondPage-main">
            <div className="inner-div">
                <Pictures img={img1} collection="Trip Collection" collectionName="SHOP WOMANS" />
                <Pictures img={img2} collection="New Collection" collectionName="SUMMER FASHION" />
            </div>

        </div>
    )
}

export default SecondPage