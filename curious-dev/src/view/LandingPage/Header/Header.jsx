import React from 'react';

export default function Header() {
    return(
           <header>
                
                <div className="text-center bg-gray-50 text-gray-800 py-10 h-auto px-6 h-full ">

                    <div className="mb-10">
                        <h1 className="text-4xl font-bold md:text-5xl ">Curious Developer</h1>
                        <h3 className="text-lg font-normal md:text-2xl ">A Place For Any Curious Developer</h3>
                        <h6 className="text-sm font-light md:text-lg text-gray-400">  The place to stay up to date with the latest technologies </h6>
                    </div>

                    <ul className='flex flex-row space-x-2 md:w-8/12 md:mx-auto'>
                        <li>
                            <img alt='react' src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" />
                        </li>
                        <li>
                            <img alt='html' src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" />
                        </li>
                        <li>
                            <img alt='css' src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" />
                        </li>
                        <li>
                            <img alt='javascript' src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
                        </li>
                        <li>
                            <img alt='' src="https://cdn-icons-png.flaticon.com/512/733/733609.png" />
                        </li>
                    </ul>
                </div>
            </header>
    )
}