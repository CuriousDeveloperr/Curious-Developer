import React from 'react';
import {Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar'

export default function GuidesLandingPage() {

    const hidden = () => {
        document.querySelector(".sidebar").classList.toggle("hidden");
    }


    return(
        <div className="bg-blue-100 w-auto">

            <div className="flex flex-row justify-around w-4/12 bg-blue-500">
                <div className="sidebar w-auto bg-gray-100" >
                    Side bar
                </div>

                <p onClick={hidden} className="hover:animate-bounce">
                 Show sidebar
                </p>
            </div>
            
             
        </div>
    )
}