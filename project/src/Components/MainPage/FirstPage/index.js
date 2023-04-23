import "./Style.css"
import img1 from "../../../assets/main-page/FirstPage/1.jpg"
import {useState} from "react"
function FirstProject() {
    let toLeft = "<"
    let toRight = ">"
    return (
        <div className="main-div-for-first-project">
            <div className="top-main">
                <div className="left-part">
                    <div className="left-part-elements">
                        <p style={{ color: "lightblue" }}>New Collection</p>
                        <h2>Man</h2>
                        <h2 style={{ color: "lightblue" }}>Collection 2022</h2>
                        <p style={{ color: "lightblue" }}>Trendy for man and woman collections</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="photos">
                    <div className="to-left">
                        {toLeft}
                    </div>
                    <img className="img" src={img1} width={450} height={300} />
    

                    <div className="to-right">
                        {toRight}
                    </div>

                </div>
                <div className="right-part">

                </div>
            </div>
            <div className="bottom-main">
                <div className="buttons">
                    <button>
                        <div className="left-logo">

                        </div>
                        <div className="right">
                            <p style={{fontWeight:"bold"}}>Free Shoping</p>
                            <p className="small">Orders over 5200</p>
                        </div>
                    </button>
                    <button>
                        <div className="left-logo">

                        </div>
                        <div className="right">
                            <p style={{fontWeight:"bold"}}>Secure Payment</p>
                            <p className="small">100% secure payment</p>
                        </div>
                    </button>
                    <button>
                        <div className="left-logo">

                        </div>
                        <div className="right">
                            <p style={{fontWeight:"bold"}}>Gift Certificate</p>
                            <p className="small">Buy now $500 to $1000</p>
                        </div>  
                    </button>
                    <button>
                        <div className="left-logo">

                        </div>
                        <div className="right">
                            <p style={{fontWeight:"bold"}}>24/7 Support</p>
                            <p className="small">Ready support</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FirstProject