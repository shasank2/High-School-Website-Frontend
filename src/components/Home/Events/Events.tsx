import Image from "next/image";
import EventItem from "./EventItem";
import EventToggler from "./EventToggler";

const Events = () => {
    return (
        <>
            <div className="py-12 h-36 bg-gray-100">
                <h1 className="text-center text-2xl font-bold underline underline-offset-8 decoration-4 decoration-yellow-300">
                    EVENTS
                </h1>
            </div>
            <br />
            <div className="grid lg:grid-cols-2 px-16 flex justify-center lg:space-y-0 md:space-y-10">
                <div className="lg:justify-self-end px-5">
                    <Image src="/aboutus.jpg" alt="EventHome" width={500} height={280}></Image>
                </div>
                <div >
                    <div className="py-0 flex justify-between max-w-[36rem]">
                        <p className="text-base font-bold">Event</p>
                    <EventToggler/>
                    </div>
                    <EventItem />
                    <EventItem />
                </div>
            </div>
        </>
    )
}

export default Events;