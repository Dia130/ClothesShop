import Top from "./Top"
import Bottom from "./Bottom"
function Header() {
    return (
        <div className="nav">
            <section>
                <Top />
            </section>
            <section>
                <Bottom />
            </section>
        </div>
    )
}
export default Header