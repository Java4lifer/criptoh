import { useEffect, useState } from "react"
import { renderToStaticNodeStream } from "react-dom/server"
import { Link } from "react-router-dom"

export function Home() {
    
    const { coins }
    
    useEffect(() => {
        fetch("https://sujeitoprogramador.com/api-cripto/?key=1e0e55cd8f099b91")
        .then(response => response.json())
        .then((data) => {
            let coinsData = data.coins.slice(0,15)
            console.log(coinsData)
        })
    })
    return(
        <main>
            <form>
                <input placeholder="Tell moneyh symbol"/>
                <button/>
            </form>
        </main>
    )
}
// npm install react-icons
// import {  }