import React from 'react';
import './buttoon.css'
import logo from '../img/logo.png'

function ButtonGroup({buttons, isSelected, setIsSelected}) {
    return (
        <div className='button-container'>
            <div className='logo'>
                <img src={logo} alt='pondasibet' />
            </div>
            <div className='menu'>
            {
                buttons.map((text, index)=> {
                    return(
                        <button className={isSelected == index ? "selected-buttons" : 'button'} 
                        onClick={()=>setIsSelected(index)}
                        >{text}</button>
                    ) 
                })
            }
            </div>
        </div>
    )
}

export default ButtonGroup;