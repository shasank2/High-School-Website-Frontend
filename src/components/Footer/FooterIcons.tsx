import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const FooterIcons = () => {
    return (
        <div className=' my-[2rem] flex h-fit space-x-6'>
            <div className='border rounded-md hover:text-blue-600'>
                <FontAwesomeIcon className='bg-gray-200 w-8 p-1 h-fit' icon={faFacebook} />
            </div>
            <div className='border rounded-md hover:text-pink-400'>
                <FontAwesomeIcon className='bg-gray-200 w-8 p-1 h-fit' icon={faInstagram} />
            </div>
            <div  className='border rounded-md hover:text-blue-400'>
                <FontAwesomeIcon className='bg-gray-200 w-8 p-1 h-fit' icon={faTwitter} />
            </div>
        </div>
    )
}

export default FooterIcons
