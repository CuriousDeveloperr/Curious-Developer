import React from 'react';
import {Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar'

export default function GuidesLandingPage() {


    return(
       <div className="w-60 h-full shadow-md bg-white px-1">
            <ul className="relative px-6">
                <li className="w-auto">
                    <p className="flex items-center text-sm py-4  h-12 text-gray-700 text-ellipsis whitespace-nowrap ">
                        Getting Started
                    </p>
                    
                    <div>
                        <Link to="intro" className="nav-link active" aria-current="page" > HTML / CSS </Link>
                    </div>
                    <div>
                        <Link to="javascript" className="nav-link active" aria-current="page" > DOM / Javascript </Link>
                    </div>
                    <div>
                        <Link to="git" className="nav-link active" aria-current="page" > Git / Github </Link>
                    </div>
                </li>
                <li className="relative">
                    <p className = "flex items-center text-sm py-4 h-12 text-gray-700 text-ellipsis whitespace-nowrap " >  Topics </p>
                </li>
                <li className="relative">
                    <p className = "flex items-center text-sm py-4 h-12 text-gray-700 text-ellipsis whitespace-nowrap " >  Begginer Guides </p>
                </li>
            </ul>
        </div>
    )
}