import navbar from '../../pages/styles/Navbar.module.css'
import Link from 'next/link'

//import { Disclosure, Menu, Transition } from '@headlessui/react'

const Navbar = () => {
    return (
        <>
            <div className='hidden md:block'>
                <nav className={navbar.nav}>
                    <ul className='py-4 px-5 flex flex-row justify-end' style={{}}>
                        <li className='mx-2 px-3 '>
                            <Link href="/">
                                <a className='hover:text-blue-500'>Home</a>
                            </Link>
                        </li>
                        <li className='mx-2 px-3'>
                            <Link href="/Gallery">
                                <a className='hover:text-blue-500'>Gallery</a>
                            </Link>
                        </li>
                        <li className='mx-2 px-3'>
                            <Link href="/Notice">
                                <a className='hover:text-blue-500'>News</a>
                            </Link>
                        </li>
                        <li className='mx-2 px-3'>
                            <Link href="/Events">
                                <a className='hover:text-blue-500'>Events</a>
                            </Link>
                        </li>
                        <li className='mx-2 px-3'>
                            <Link href="/Downloads">
                                <a className='hover:text-blue-500'>Downloads</a>
                            </Link>
                        </li>
                        <li className='mx-2 px-3'>
                            <Link href="/ContactUs">
                                <a className='hover:text-blue-500'>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
