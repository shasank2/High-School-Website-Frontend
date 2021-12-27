import Link from 'next/link'

const NewsItem = ({ newsObject }: any) => {
    return (
        <>
            <div className="border-b p-5 col-span-2 space-y-5 text-gray-600">
                <h1 className="text-xl text-slate-700 font-bold">
                    <Link href={`/Notice/${newsObject?.id}`}>
                        <a className="hover:text-blue-500">{newsObject?.title}</a>
                    </Link>
                </h1>
                <div className="space-x-2 text-sm">
                    <span>{newsObject?.postedBy}</span>
                    <span>-</span>
                    <span>{newsObject?.date}</span>
                    <span>-</span>
                    <span>Comments-0</span>
                </div>
                <p className="text-sm">
                    {newsObject?.short_description}
                </p>
                <button className="text-center border border-gray-400 text-sm py-2 px-5 hover:text-blue-500 hover:border-blue-500">
                    <Link href={`/Notice/${newsObject?.id}`}>
                        Continue Reading..
                    </Link>
                </button>
            </div>
        </>
    )
}

export default NewsItem