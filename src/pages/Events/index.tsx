import Link from 'next/link'
import { NextPage } from "next";
import EventToggler from "../../components/Home/Events/EventToggler";
import EventItem from "../../components/Home/Events/EventItem";
import Search from "../../components/Search";
import { EventObject } from '../../Objects/EventObjects';

const EventsPage: NextPage = () => {
    return (
        <>
            <div className="p-10 h-fit bg-gray-100">
                <h1 className="text-2xl font-bold">Events</h1>
            </div>
            <div className='grid lg:grid-cols-3 p-16'>
                <div className="col-span-2 pb-10">
                    <div className="grid lg:grid-cols-3 gap-4">
                        <input type="text" placeholder="Keywords" className="border p-3 rounded-md" />
                        <input type="text" placeholder="Location" className="border p-3 rounded-md" />
                        <input type="date" placeholder="Select Date" className="border p-3 rounded-md" />

                        <select className="border p-3 rounded-md">
                            <option value="">Choose a Category</option>
                            <option value="dog">Business</option>
                            <option value="">Computer</option>
                            <option value="">Marketing</option>
                        </select>
                        <select className="border p-3 rounded-md">
                            <option value="">Choose an Event Type</option>
                            <option value="">Entertainment</option>
                            <option value="">Dance</option>
                        </select>
                    </div>
                    <br />
                    <EventToggler />

                    {
                        EventObject.map((elem)=>{
                            return (
                            <div key={elem.id}>
                                <Link href={`/Events/${elem.id}`}>
                                    <a >
                                        <EventItem EventObject={elem} />
                                    </a>
                                </Link>
                            </div>
                            )  
                        })
                    }
                </div>
                <Search />
            </div>
        </>
    )
}

export default EventsPage;

// export const getStaticProps = async()=> {
    
// }