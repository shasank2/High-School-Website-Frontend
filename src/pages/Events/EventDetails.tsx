import React, { useState } from 'react'

const EventDetails = ({ objectDetail }: any) => {

    const [openDiv, setOpenDiv] = useState<boolean>(true)

    const handleToggle = () => {
        setOpenDiv(!openDiv)
    }

    return (
        <div>
            <h1 className="text-2xl text-slate-700 font-bold border-b pb-8 ">
                {objectDetail.name}
            </h1>
            <div className='w-full'>
                <div className='h-72 bg-gray-200 mt-4'>{/**blank div for image */}</div>
                <div className='grid grid-cols-3 border divide-x text-gray-700' >
                    <div className='col-span-2 p-8 text-xl font-bold'>
                        {objectDetail.name}
                        <br />
                        <p className='text-sm font-meduim mt-2'>
                            viewed by: 7
                        </p>
                        <br /><br />
                        <p className='font-normal text-base'>
                            You are Sports Secretary of Lalwani Public
                            School, Udaipur. Draft a notice in not more
                            than 50 words for your school notice board
                            asking the students to give their names
                            for participation in various events to be
                            held on the Annual Sports Day of your school.
                            Invent the details of the events. Sign as
                            Lalit/Lalita.
                        </p>
                    </div>
                    <div className='p-4 pt-8'>
                        <div className='w-fit mx-auto'>
                            <button onClick={handleToggle} className='bg-blue-400 hover:bg-slate-600 text-neutral-50 font-bold py-2 px-4 rounded w-fit mx-auto'>
                                Register For Event
                            </button>
                        </div>
                        <div className='mx-2'>
                            <div className='hidden' style={{display: openDiv? "none":"inline"}}>
                                To register for this event <b> email
                                your details to </b> sandeep@yarshatech.com
                                Register using webmail: Gmail / AOL / Yahoo / Outlook
                            </div>
                            <br />
                            <br />
                            <h1 className='font-bold' >Date and Time</h1>
                            <p>2021-08-07 @ 11:30 PM to</p>
                            <p>2021-08-07 @ 06:00 PM</p>
                            <br />
                            <h1 className='font-bold' >Location</h1>
                            <p>{objectDetail.location}</p>
                            <br />
                            <h1 className='font-bold' >Event Category</h1>
                            <a href="#">
                                <p>Sport and Fitenss</p>
                            </a>
                            <br />
                            <h1 className='font-bold' >Share With Friends</h1>
                            <div className='space-x-4'>
                                <span>FB</span>
                                <span>IG</span>
                                <span>G</span>
                                <span>IN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails
