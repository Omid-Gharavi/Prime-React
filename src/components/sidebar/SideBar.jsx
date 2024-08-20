'use client'

import React, { useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { BsExclamationCircleFill } from "react-icons/bs";
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const path = usePathname()
    const [toggle, setToggle] = useState(false)

    const lists = [
        {
            icon: <MdHomeFilled className={`text-3xl ${path === '/' ? 'text-orchid-50' : ''}`} />,
            name: 'Home'
        },
        {
            icon: <BsExclamationCircleFill className={`text-3xl ${path === '/about' ? 'text-orchid-50' : ''}`} />,
            name: 'About'
        },
    ]

    return (
        <div className={`relative min-h-screen transition-all duration-500 ease-in-out ${toggle ? 'w-[61.5px]' : 'w-32'} bg-orchid-800`}>
            <div className='absolute left-[100%] w-px h-screen bg-orchid-500'>
                <div
                    className='flex flex-col justify-center items-center cursor-pointer absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-10 h-10 rounded-full bg-orchid-50 transition-all duration-[.2s] ease-in-out'
                    onClick={() => setToggle(!toggle)}
                >
                    <div className={`w-5 h-[2px] bg-zinc-50 transition-all duration-400 ease-in-out ${toggle ? 'rotate-[45deg]' : '-rotate-[45deg]'} translate-y-[-245%]`}></div>
                    <div className={`w-5 h-[2px] bg-zinc-50 transition-all duration-400 ease-in-out ${toggle ? '-rotate-[45deg]' : 'rotate-[45deg]'} translate-y-[295%]`}></div>
                </div >
            </div>
            <ul className='grid items-center gap-4 mt-4 px-3'>
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