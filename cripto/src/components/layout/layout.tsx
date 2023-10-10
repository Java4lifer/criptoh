import { Outlet } from "react-router-dom"
// import { Header } from "../Header/index.tsx"

export function Layout() {
    return(
        <>
            <header>
                <span>Start of racism</span>
            </header>
            <Outlet/>
            <br/>
            <footer>
                <span>The end of racism</span>
            </footer>
        </>
    )
}