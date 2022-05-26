import React from 'react';
import Header from '../LandingPage/Header/Header'
import OpenSource from './SubViews/OpenSource';
import Community from './SubViews/Community';
import Footer from '../Footer/Footer';

export default function LandingPage(){
    return(
        <div>
            <Header />
            
            <OpenSource />

            <Community />

            <Footer />
        </div>
    )
}