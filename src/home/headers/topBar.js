import React from "react";
import './topStyles.css'

export default function TopBar() {
    return(
        <div className="topBarBackground">
            <div className="hello">
                <span className="helloText">Здравствуйте! Я - Хомяков Кирилл</span>
            </div>
            <div className="nickname">
                <span>EvgrafovBTW</span>
                <span>bleedthemwhite</span>
            </div>
        </div>
    )
}