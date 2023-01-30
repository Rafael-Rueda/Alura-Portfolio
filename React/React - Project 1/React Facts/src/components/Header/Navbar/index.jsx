import './styles.css' 
import React, { useState } from 'react'
export default function Navbar(props) {
    
    function handleClick() {
        props.setDarkMode(prevValue => !prevValue)
    }

    const styles_nav = {
        backgroundColor: props.darkMode ? '#21222A' : '#FFFFFF',
        transition: '0.5s',
        color: props.darkMode ? '#DEEBF8' : '#2B283A'
    }

    const styles_bgdm = {
        backgroundColor: props.darkMode ? '#CCCCCC' : '#333333',
        transition: '0.5s',
        width: '40px',
        height: '20px',
        borderRadius: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    }

    const styles_butdm = {
        backgroundColor: props.darkMode ? '#333333' : '#CCCCCC',
        transition: '0.5s',
        width: '15px',
        height: '15px',
        borderRadius: '30px',
        transform: props.darkMode ? "translate(23px, 0)" : 'translate(2px, 0)',
        transition: 'transform 0.5s'
    }

    const styles_divdm = {
        display: 'flex', 
        alignItems: 'center', 
        gap: '0px 8px',
    }

    const styles_text1dm = {
        color: '#2B283A',
    }

    const styles_text2dm = {
        color: '#CCCCCC',
    }
    

    return (
        <nav style={styles_nav}>
            <div className="logo">
                <img src="react.svg"></img>
                <h1>ReactFacts</h1>
            </div>
            <p>React Course - Project 1</p>

            <div style={styles_divdm}>
                
                <p style={styles_text1dm}>Light</p>
                <div style={styles_bgdm} onClick={handleClick}>
                    
                    <div style={styles_butdm} className="button_dm"></div>
                    
                </div>
                <p style={styles_text2dm}>Dark</p>

            </div>
        </nav>
    )
}