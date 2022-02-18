import React from "react";
import './topStyles.css'

export default function Header() {
    return(
        <div className="headerBarBackground"> 
            <div className="icon">
                <span className="iconText">BTW</span>
            </div>
            <div className="items">
                <div className="item item1">
                    <span>item1</span>
                </div>
                <div className="item item2">
                    <span>item2</span>
                </div>
                <div className="item item3">
                    <span>item3</span>
                </div>
            </div>
        </div>
    )
}