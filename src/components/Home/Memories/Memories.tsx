import MemoriesItem from "./MemoriesItem"

const Memories = () => {
    return (
        <>
            <div className="py-12 h-36 bg-gray-100">
                <h1 className="text-center text-2xl font-bold underline underline-offset-8 decoration-4 decoration-yellow-300">
                    SOME BEST MEMORIES
                </h1>
            </div>
            <br />
            <div className="px-16 flex justify-items-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                <MemoriesItem />
                <MemoriesItem />
                <MemoriesItem />
                <MemoriesItem />
                <MemoriesItem />
                <MemoriesItem />
                <MemoriesItem />
            </div>
        </>

    )
}

export default Memories