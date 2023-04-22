import "./Style.css"
import img1 from "../../../assets/1.jpg"
import img2 from "../../../assets/2.jpg"
import img3 from "../../../assets/3.jpg"
import Picture from "./Picture"
function FirstPage() {
    return (
        <div className="page-1">
            <div className="first-part">
                <h2>From the blog</h2>
                <div className="lorem">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quod fuga impedit, architecto, eaque dolorum vitae  </p>
                </div>
            </div>
            <div className="pictures">
                <Picture img={img1} height={200} width={200} title="DESIGN JULY 11 2021" description="2021's Biggest Sneakers Is Getting Us So Pumped For Summer" />
                <div className="third-picture">
                    <div className="for-img3">
                        <small className="style">Style</small>
                        <div className="middle-part">
                            <p>DESIGN JULY11 2021</p>
                            <p>2021's Biggest Sneakers Is Getting Us So Pumped For Summer"</p>
                            <button className="view-more">View More</button>
                        </div>
                    </div>
                    <Picture img={img3} height={300} width={200} />
                </div>

                <Picture img={img2} height={200} width={200} title="DESIGN JULY 11 2021" description="2021's Biggest Sneakers Is Getting Us So Pumped For Summer" />
            </div>
        </div>
    )
}

export default FirstPage