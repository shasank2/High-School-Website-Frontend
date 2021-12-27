import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NewsDetails from '../../components/Notice/NewsDetails'
import { newsObject } from '../../Objects/NewsObject'

import Search from '../../components/Search'
import console from 'console'

const newsIdFilter = () => {
    const router = useRouter()
    const newsId = router.query.NewsId

    const [filteredItem, setFilteredItem] = useState<any>([])

    const objectFilterById = () => {
        const selectedObject = newsObject.filter((elem: any) => 
        (elem.id == newsId))
        return selectedObject
    }
    
    useEffect(() => {
        setFilteredItem(objectFilterById())
    }, [])

    return (
        <div>
            <div className="p-10 h-fit bg-gray-100">
                <h1 className="text-2xl font-bold ">News &gt; {filteredItem[0]?.title}</h1>
            </div>
            <div className='grid lg:grid-cols-3 p-16'>
                <div className='col-span-2 space-y-5 mb-10'>
                    {
                        filteredItem.map((elem:any)=>(
                            <div key={elem.id}>
                                <NewsDetails objectDetail={elem} />
                            </div>
                        ))
                    }
                </div>
                <Search />
            </div>
        </div>
    )
}

export default newsIdFilter
