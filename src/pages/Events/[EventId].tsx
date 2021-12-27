import { useRouter } from 'next/router'
import Search from '../../components/Search'
import { EventObject } from '../../Objects/EventObjects'
import { useState, useEffect } from 'react'
import { Event } from './EventInterface'
import DetailsItem from './EventDetails'


const EventDetails = () => {
    const router = useRouter()
    const eventId = router.query.EventId

    const [filterItem, setFilterItem] = useState<Event[]>([])

    const ObjectFilterById = () => {
        const selectedObject = EventObject.filter((elem: any) =>
            elem.id == eventId
        )
        return selectedObject
    }

    useEffect(() => {
        setFilterItem(ObjectFilterById())
    }, [])

    console.log(filterItem)
    return (
        <>
            <div className="p-10 h-fit bg-gray-100">
                <h1 className="text-2xl font-bold ">Events &gt; {filterItem[0]?.name}</h1>
            </div>
            <div className='grid lg:grid-cols-3 p-16'>
                <div className='col-span-2 space-y-5 mb-10'>
                    {
                        filterItem.map(elem => (
                            <div key={elem.id}>
                                <DetailsItem objectDetail={elem}/>
                            </div>
                        ))
                    }
                </div>
                <Search />

            </div>

        </>
    )
}

export default EventDetails