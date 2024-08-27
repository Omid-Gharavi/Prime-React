'use client'

import { countries } from '@/_data/countries';
import { Input } from '@nextui-org/react';
import { useEffect, useMemo, useRef, useState } from 'react';

const Filter = () => {
    const [toggle, setToggle] = useState(false);
    const [inputValue, setInputValue] = useState('');
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
    }, [inputRef, dropdownRef]);

    const filteredCountries = useMemo(() => {
        return countries.filter(country => country.toLowerCase().startsWith(inputValue.toLowerCase()))
    }, [countries, inputValue])

    return (
        <div className='max-w-full w-72 rounded-lg bg-zinc-900 p-4'>
            <div className='relative'>
                <Input
                    ref={inputRef}
                    placeholder='Select Country'
                    size='lg'
                    onClick={() => setToggle(true)}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div
                    ref={dropdownRef}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={`absolute inset-x-0 p-2 flex flex-col gap-2 transition-all duration-250 ease-in-out bg-default-100 rounded-lg h-52 ${toggle ? 'top-[120%] visible opacity-100' : 'top-[170%] invisible opacity-0'}`}
                >
                    {
                        filteredCountries.length > 0 ? (
                            filteredCountries.map((country, index) => (
                                <div key={index}>{country}</div>
                            ))
                        ) : (
                            <div>NOTHING</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Filter;