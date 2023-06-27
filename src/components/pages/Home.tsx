import React from 'react';
import '../../style/home.css'
import '../../style/navigationBar.css'
import NavigationBar from '../organisms/NavigationBar';
import FooterNavigation from '../organisms/FooterNavigation';

const appBarStyle: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none'
}

/**
 * This is the Home Page of the Aplication
 * @returns the Home Page Component
 * @author Timofey Makhankov
 * @copyright 2023
 */
export default function Home() {
    return (
        <div style={{backgroundColor: 'black'}}>
        <div className='navigation-bar-container'>
        <NavigationBar appBarStyle={appBarStyle}/>
        </div>
            <div className='container'>
                <div className='rectangle' />
            </div>
            <div className='content'>
                <h1>REST-Foods Restaurant</h1>
            </div>
            <div>
                <p className='title-description'>The Most beloved <br/> Internet Restaurant of <br/> the decade </p>
            </div>
            <FooterNavigation/>
        </div>
    )
}
