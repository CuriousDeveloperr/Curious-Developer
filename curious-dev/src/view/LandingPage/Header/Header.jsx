import React from 'react';

export default function Header() {
    return(
           <header>
                
                <div className="text-center bg-gray-50 text-gray-800 py-10 px-6">

                    <div className="mb-10">
                        <h1 className="text-4xl font-bold md:text-5xl ">Curious Developer</h1>
                        <h3 className="text-lg font-normal md:text-2xl ">A Place For Any Curious Developer</h3>
                        <h6 className="text-sm font-light md:text-lg text-gray-400">  The place to stay up to date with the latest technologies </h6>
                    </div>

                    <ul className='flex flex-row space-x-2 md:w-8/12 md:mx-auto'>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" />
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" />
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" />
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
                        </li>
                        <li>
                            <img src="https://cdn-icons.flaticon.com/png/512/4471/premium/4471714.png?token=exp=1658602751~hmac=04c4fd51f0f59b1562ae0a2ddae32b72" />
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" />
                        </li>
                    </ul>
                </div>
            </header>
    )
}