import React, {useContext, useState} from 'react';
import './LandingPage.css';
import Context from './Context/Context';
import banana from '../images/banana.png';
import yougurt from '../images/yog.png';
import blacberries from '../images/bb.png';
import strawb from '../images/strawb.png';
import plus from '../images/plus.png';
import minus from '../images/minus.png';
import Navbar from './SubComponents/Navbar';
import Products from './SubComponents/Products';

function LandingPage() {
    const data=[
        {
            id:'1',
            src:banana,
            iden:'Banana 1 ct',
            price:'$ 0.69',
            energy:'18 oz'
        }
    ]
    return (
        <Context.Provider value={data}>
        <div className='LandingPageContainer'>
            <div className='NavbarContainer'>
            <Navbar />
            </div>
            <div className='ProductContainer'>
            <Products />
            </div>
        </div>
        </Context.Provider>
    )
}

export default LandingPage