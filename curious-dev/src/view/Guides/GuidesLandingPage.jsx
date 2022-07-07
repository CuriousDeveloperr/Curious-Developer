import React from 'react';
import {Link } from 'react-router-dom';

export default function GuidesLandingPage() {
    return(
        <div>
            Guides page
            
            <ul>
                <li className="nav-item pr-2">
                    <Link to="/guides/web3" className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Web3</Link>
                </li>
            </ul>
        </div>
    )
}