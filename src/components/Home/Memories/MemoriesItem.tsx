import Image from "next/image";

const MemoriesItem = () => {
    return (
        <>
            <div className="h-[11.4rem] w-[16rem] hover:border-2">
                <Image src="/gallery001.jpg" alt="galleryHome" width={300} height={210}></Image>
            </div>
        </>
    )
}

export default MemoriesItem;