import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import navbar from '../../pages/styles/Navbar.module.css'

const NavbarMobile = () => {

    const [state, setstate] = useState(true)
    const ref = useRef<any>(null)

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside)
        return () => {
            document.removeEventListener('mousedown', clickOutside)
        }
    }, [state])


    const clickOutside = (e: any) => {
        if (ref.current.contains(e.target)) {
        } else {
            setstate(true)
        }
    }

    const handleClick = (e: any) => {
        return setstate(!state)
    }

    return (
        <>
            <div className='sm:flex md:hidden'>
                <i className="fa fa-file" aria-hidden="true"></i>    {/*sample icon*/}
                <nav className='text-base font-medium border text-slate-600 min-h-[3rem] w-full'>

                    <span className={navbar.showButton} onClick={(e) => handleClick(e)}>=</span>
                    <ul ref={ref} className='py-4 px-5 z-20 flex flex-col w-full absolute bg-gray-100' style={{ display: `${state ? "none" : "block"}` }}>
                        <li className='mx-2 px-2 py-1'>
                            <Link href="/">
                                <a className='hover:text-blue-500'>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className='mx-2 px-2 py-1'>
                            <Link href="/Gallery">
                                <a className='hover:text-blue-500'>
                                    Gallery
                                </a>
                            </Link>
                        </li>
                        <li className='mx-2 px-2 py-1'>
                            <Link href="/Notice">
                                <a className='hover:text-blue-500'>
                                    News
                                </a>
                            </Link>
                        </li>
                        <li className='mx-2 px-2 py-1'>
                            <Link href="/Events">
                                <a className='hover:text-blue-500'>
                                    Events
                                </a>
                            </Link>
                        </li>
                        <li className='mx-2 px-2 py-1'>
                            <Link href="/Downloads">
                                <a className='hover:text-blue-500'>
                                    Downloads
                                </a>
                            </Link>
                        </li>
                        <li className='mx-2 px-2 py-1'>
                            <Link href="/ContactUs">
                                <a className='hover:text-blue-500'>
                                    Contact Us
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavbarMobile;