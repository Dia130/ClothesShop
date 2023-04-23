import "./Style.css"
import FirstPage from "./FirstPage"
import LastPage from "./LastPage"
function MainPage() {
    return (
        <div className="Main-page">
            <section>
                <FirstPage/>
            </section>
            {/* <section>
                <LastPage/>
            </section> */}
        </div>
    )
}
export default MainPage