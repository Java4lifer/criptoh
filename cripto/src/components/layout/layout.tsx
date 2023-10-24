import { Outlet } from "react-router-dom"
import { Header } from "../header/index.tsx"

export function Layout() {
    return(
        <>
            <Header/>
            <span>Start of racism</span>
            <Outlet/>
            <br/>
            <footer>
                <span>The end of racism</span>
            </footer>
        </>
    )
}