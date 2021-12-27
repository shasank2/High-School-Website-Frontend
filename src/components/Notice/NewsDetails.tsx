import React from 'react'

const NewsDetails = ({objectDetail}:any) => {
    return (
        <div>
            <h1 className="text-3xl text-slate-700 font-bold border-b pb-8 ">
                {objectDetail?.title}
            </h1>
            <div className='p-4'>
                <div className='h-[12rem] w-[20rem] bg-gray-200 mx-auto'>
                    {/*Image placeholder */}
                </div>
                <br />
                <div className='text-slate-700 border-b '>
                    <p>{objectDetail?.short_description}</p>
                    <br />
                    <p>please click below link for admission form</p>
                    <br />
                    <a href='www.google.com' className='hover:text-blue-500'>
                        www.google.com
                    </a>
                    <br /><br />
                </div>
            </div>
        </div>
    )
}

export default NewsDetails
