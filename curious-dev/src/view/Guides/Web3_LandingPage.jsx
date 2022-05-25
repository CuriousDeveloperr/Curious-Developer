import React from 'react'
import Sidebar from './Sidebar/Sidebar'

export default function Web3() {
    return(
        <div className='flex flex-row'>
           <Sidebar className="w-auto" />
          
           
            

           <div className='w-full mx-auto bg-gray-100'>
                <LandingPage />
           </div>
           
        </div>
    )
}



function LandingPage() {
    return(
        <div>
            <p className='uppercase text-3xl text-center p-4 underline'>Web3 Basics</p>

            <div>
                

            </div>

        </div>
    )
}