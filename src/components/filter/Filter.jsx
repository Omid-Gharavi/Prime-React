'use client'

import { Input } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';

const Filter = () => {
    const [toggle, setToggle] = useState(false);
    const inputRef = useRef();
    const dropdownRef = useRef();

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setToggle(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className='max-w-full w-72 rounded-lg bg-zinc-900 p-4'>
            <div className='relative'>
                <Input ref={inputRef} placeholder='Select Country' size='lg' onClick={() => setToggle(true)} />
                <div
                    ref={dropdownRef}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={`absolute inset-x-0 transition-all duration-250 ease-in-out bg-default-100 rounded-lg h-52 ${toggle ? 'top-[120%] visible opacity-100' : 'top-[170%] invisible opacity-0'
                        }`}
                ></div>
            </div>
        </div>
    );
};

export default Filter;