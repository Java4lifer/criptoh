import {Link} from "react-router-dom"

export function Header() {
    return(
        <>
        {/* header classname={style.container} */}
        <header> 
            <h2>Team Cirno■</h2>
            <div>
                <Link to="/">Home,  </Link>
                <Link to="/ditail">Detail</Link>
            </div>
        </header>
        </>
    )
}