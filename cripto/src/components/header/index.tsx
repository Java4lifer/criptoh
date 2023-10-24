import {Link} from "react-router-dom"
import styles from "./header.module.css"
import logoimg from "../../assets/logo.svg"

export function Header() {
    return(<>
        {/* header classname={style.container} */}
        <header className={styles.container}> 
            <h2>Team Cirno■</h2>
            <div>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logoimg} alt="Logo CriptoMoedas"/>
                    </Link>
                </div>
                <Link to="/ditail">Detail</Link>
            </div>
        </header>
        </>
    )
}