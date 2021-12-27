import type { NextPage } from 'next'
import MemoriesItem from '../../components/Home/Memories/MemoriesItem';
import Search from '../../components/Search';

const Gallery: NextPage = () => {
    return (
        <>
            <div className="p-10 h-fit bg-gray-100">
                <h1 className="text-2xl font-bold">Gallery</h1>
            </div>
            <div className='grid lg:grid-cols-3 p-16'>
                <div className='col-span-2 grid lg:grid-cols-3 md:grid-cols-2 flex justify-center pb-10'>
                    <MemoriesItem />
                    <MemoriesItem />
                    <MemoriesItem />
                    <MemoriesItem />
                    <MemoriesItem />
                    <MemoriesItem />
                </div>
               <Search/>
            </div>
        </>

    )
}

export default Gallery;
