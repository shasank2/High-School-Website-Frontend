import NewsItem from "../../components/Notice/NewsItem";
import Search from "../../components/Search";

const DownloadPage = () => {
    return (
        <>
            <div className="p-10 h-fit bg-gray-100">
                <h1 className="text-2xl font-bold">Downloads</h1>
            </div>
            <div className='grid lg:grid-cols-3 p-16'>
                <div className='col-span-2 pb-10'>
                    <NewsItem />
                </div>
                <Search/>
            </div>
        </>
    )
}

export default DownloadPage;