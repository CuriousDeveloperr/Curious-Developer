import React from 'react';

export default function Header() {
    return(
           <header>
                
                <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
                    <h1 class="text-5xl font-bold mt-0 mb-6">Curious Developer</h1>
                    <h3 class="text-3xl font-bold mb-8">A Place For Any New Curious Dev</h3>

                    <ul className='flex flex-row w-1/2 items-center mx-auto'>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" />
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/235/235438.png" />
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/4125/4125334.png" />
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/3778/3778252.png" />
                        </li>
                        <li>
                            <img src="https://miro.medium.com/max/600/0*IQxtovIkGXiSWzVg.png" />
                        </li>
                        <li>
                            <img src="https://cdn-icons-png.flaticon.com/512/7560/7560704.png" />
                        </li>
                    </ul>
                </div>
            </header>
    )
}