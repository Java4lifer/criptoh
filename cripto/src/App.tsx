// import { useState } from 'react';
import { RouterProvider } from "react-router-dom"
import {router} from "./pages/router"
import './App.css'

function App() {
  

  return (
    // <>
    //   <div className='container'>
    //     <h1>Making Routes</h1>
    //   </div>
    // </>
    <RouterProvider router={router}/>
    )
}
//https://sujeitoprogramador.com/api-cripto/?key=1e0e55cd8f099b91
export default App