import { useEffect, useState } from "react";
import { NextPage } from "next";
import NewsItem from "../../components/Notice/NewsItem";
import Search from "../../components/Search";
import { newsObject } from "../../Objects/NewsObject";


import { getApiData } from "../../axios/API";

interface responseInterface {
    id : number,
    title:string,
    short_description:String
}

const NewsPage: NextPage = () => {
    const [newsDetail, setNewsDetail] = useState<responseInterface[]>([]);

    // const getData = async () => {
    //     const data:any = await getApiData('/notice')
    //     console.log(data)
    //     setNewsObject(data.data.results);
    // }

    
    useEffect(() => {
        setNewsDetail(newsObject)
    }, [])

    return (
        <>
            <div className="p-10 h-fit bg-gray-100">
                <h1 className="text-2xl font-bold">News</h1>
            </div>
            <div className='grid lg:grid-cols-3 p-16'>
                <div className='col-span-2 pb-10'>
                    {
                        newsDetail.map((elem:responseInterface) => (
                            <div key={elem.id}>
                                <NewsItem newsObject={elem} />
                            </div>
                        ))
                    }
                </div>
                <Search />
            </div>
        </>
    )
}

export default NewsPage;