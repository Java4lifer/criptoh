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

export default App