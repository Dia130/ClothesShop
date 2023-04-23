import "./Style.css"
import FirstPage from "./FirstPage"
import LastPage from "./LastPage"
import SecondPage from "./SecondPage"
function MainPage() {
    return (
        <div className="Main-page">
            <section>
                <FirstPage />
            </section>
            <section>
                <SecondPage />
            </section>
            <section>
                <LastPage />
            </section>
        </div>
    )
}
export default MainPage