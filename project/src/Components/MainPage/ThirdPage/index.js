import "./Style.css"
import img1 from "../../../assets/main-page/ThirdPage/1.jpg"
import img2 from "../../../assets/main-page/ThirdPage/2.jpg"
import img3 from "../../../assets/main-page/ThirdPage/3.jpg"
import img4 from "../../../assets/main-page/ThirdPage/4.jpg"
import img5 from "../../../assets/main-page/ThirdPage/5.jpg"
import img6 from "../../../assets/main-page/ThirdPage/6.jpg"
import Cards from "./Cards"
import Navigation from "./Navigation"
function ThirdPage() {
    return (
        <div className="thirs-page-main">
            <div className="third-page-information">
                <div className="nav-part">
                    <Navigation />
                </div>
                <div className="card-part">
                    <div className="cards">
                        <Cards img={img1} title="Man Sweet Hoodie" cost="$150.00" />
                        <Cards img={img2} title="Man Summer Sweet Hoodie" cost="$150.00" />
                        <Cards img={img3} title="Man  Sweet Hoodie" cost="$150.00" />
                        <Cards img={img4} title="Man  Sweet Hoodie" cost="$150.00" />
                        <Cards img={img5} title="Man  Sweet Hoodie" cost="$200.00" />
                        <Cards img={img6} title="Man  Sweet Hoodie" cost="$150.00" />
                    </div>
                    <button className="view-all">View All</button>
                </div>

            </div>
        </div>
    )
}
export default ThirdPage