import React from 'react';
import Header from '../LandingPage/Header/Header'
import OpenSource from './SubViews/OpenSource';
import Community from './SubViews/Community';

export default function LandingPage(){
    return(
        <div>
            <Header />
            
            <OpenSource />

            <Community />
        </div>
    )
}