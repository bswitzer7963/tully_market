import {useState, useEffect} from 'react';

export default function NavBar({curState, setCurState}) {

    function handleNavBtn(to) {
        if (curState === to) {
            if (curState === 'home') {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
            return;
        }
        else {
            setCurState(to);
        }
    }

    return (
        <div id="navbar">
            <button id="home-btn" onClick={() => handleNavBtn('home')}>
                {curState === 'home' ? "Return to Top" : "Home"}
            </button>
            <button id="inventory-btn" onClick={() => handleNavBtn('inventory')}>
                Inventory
            </button>
            <button id="inventory-btn" onClick={() => handleNavBtn('in-season')}>
                What's In Season?
            </button>      
        </div>
    )
}