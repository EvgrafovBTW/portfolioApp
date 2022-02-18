import React from "react";
import './App.css'
import Header from './headers/header'
import TopBar from "./headers/topBar";

function App(){
    return(
        <div className="appBackground">
            <Header />
            <TopBar />
        </div>
    )
}

export default App;