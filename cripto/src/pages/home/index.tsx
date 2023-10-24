import { useEffect, useState } from "react"
import styles from "./home.module.css"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";


interface CoinProps{
    name: string;
    delta_24h: string;
    price: string;
    symbol: string;
    volume_24h: string;
    market_cap: string;
}


export function Home() {
    
    const [ coins, setCoins ] = useState()
    
    useEffect(() => {
        async function getData() {
        fetch("https://sujeitoprogramador.com/api-cripto/?key=1e0e55cd8f099b91")
        .then(response => response.json())
        .then((data) => {
            let coinsData = data.coins.slice(0,15)
            console.log(coinsData)
        })
    }
    getData();
    
    }, [])

    return(
        <main className={styles.container}>
            <form className={styles.form}>
                <input 
                placeholder="Imputeth moneh symbol!"
                />
                <button type="submit">
                <HiMiniMagnifyingGlass size={30} color="#fff"/>
                </button>

            </form>

            <table>

                <thead>
                    <tr>

                        <th scope="col">Moneh</th>
                        <th scope="col">Market pricuh</th>
                        <th scope="col">Pricuh</th>
                        <th scope="col">Volume</th>

                    </tr>

                </thead>

                <tbody id="tbody">
                    <tr className={styles.tr}>
                        <td className={styles.tdLabel} data-label="Moeda">
                            <Link  className={styles.link} to="/detail/btc">
                                <span>Bitcoin</span> | BTC
                            </Link>
                        </td>
                        <td className={styles.tdLabel}>
                            R$19269
                        </td>
                        <td className={styles.tdLabel}>
                            R$40.962
                        </td>
                        <td className={styles.tdLoss}>
                            <span> -5.3</span>
                        </td>
                    </tr>

                </tbody>

            </table>


        </main>
    )
}
// npm install react-icons
// import {  }