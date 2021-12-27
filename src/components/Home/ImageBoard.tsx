import React from 'react'
import Image from 'next/image'


const ImageBoard = () => {
    return (
        <>
            <div className='w-full min-h-[21rem] max-h-fit bg-cover bg-fixed flex flex-col' style={{ backgroundImage: "linear-gradient(rgba(135, 80, 156, 0.9),rgba(135, 80, 156, 0.9)),url(/Durbar_High_School.jpg) "}}>
                <h1 className='text-center text-yellow-300 text-3xl font-bold py-24'>
                    SERVING SINCE 2022 B.S
                </h1>
                <p className='text-center text-yellow-300 text-sm mt-[-5px] mb-5'>
                    With more than 50 years of service we have provided quality education with excellence to more than thousands of student
                </p>
                <button className='bg-yellow-300 hover:bg-slate-600  text-indigo-600 font-bold py-2 px-4 rounded w-fit mx-auto '>BELIEVE IN PERFECTION</button>
            </div>
        </>
    )
}

export default ImageBoard
