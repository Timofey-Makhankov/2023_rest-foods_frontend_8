import React from 'react';
import '../../style/home.css'
import NavigationBar from '../organisms/NavigationBar';
import FooterNavigation from '../organisms/FooterNavigation';

const appBarStyle = {
    background: 'rgba(0, 0, 0, 0)'
}

export default function Home() {
    return (
        <>
            <NavigationBar style={appBarStyle}/>
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
        </>
    )
}
