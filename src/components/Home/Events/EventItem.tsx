const EventItem = ({EventObject}:any) => {
    return (
        <>
            <div className="bg-yellow-100 h-fit max-w-[36rem] border border-gray-200 border-l-4 border-l-gray-300 my-2 p-3 grid grid-cols-6 gap-4 hover:border-l-[10px]">
                <div className="bg-gray-300 w-15 h-15"></div>
                <div className="text-lg font-bold text-gray-500"> {EventObject?.date} </div>
                <div className="col-span-4">
                    <p className="font-bold text-center">
                        {EventObject?.name}
                    </p>
                    <p>Time: 2021/05/12 12:00 AM-2021/05/16 1:00 PM</p>
                    <p>Location: {EventObject?.location}</p>
                </div>
            </div>
        </>
    )
}

export default EventItem;