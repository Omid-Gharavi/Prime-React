'use client'

import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";

const SideBar = () => {
    const [toggle, setToggle] = useState(false)

    const lists = [
        {
            icon: <MdHomeFilled className='text-3xl text-orchid-50' />,
            name: 'Home'
        },
    ]

    return (
        <div className={`relative min-h-screen flex flex-col transition-all duration-500 ease-in-out ${toggle ? 'w-[61.5px]' : 'w-32'} bg-orchid-800`}>
            <div className='absolute left-[100%] w-px h-screen bg-orchid-500'>
                <div
                    className='cursor-pointer absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-10 h-10 rounded-full bg-orchid-50 transition-all duration-[.2s] ease-in-out'
                    onClick={() => setToggle(!toggle)}
                ></div >
            </div>
            <ul className='flex items-center h-full mt-4 px-3'>
                {
                    lists.map((list, index) => (
                        <li className='grow hover:bg-orchid-500 transition-all duration-150 ease-in-out cursor-pointer rounded-lg py-1 overflow-hidden grid grid-cols-[max-content_max-content] items-center gap-2 h-full px-1'>
                            {list.icon}
                            <p className='text-lg overflow-hidden transition-all duration-[.2s] ease-in-out'>{list.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default SideBar