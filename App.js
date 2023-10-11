import React from "react"
import ReactDOM from "react-dom/client"
import Restaurntcard from "./src/compo/Restaurntcard"
import Header from "./src/compo/Header"
import Body from "./src/compo/Body"


//+917774524416
const  Applayout = () => {
    return (
    <div className = "app"> 
    <Header />
    <Body />
    </div>
)}
const root = ReactDOM.createRoot(document.querySelector(".prod"))
root.render(<Applayout />)
