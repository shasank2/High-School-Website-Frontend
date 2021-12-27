const News = () => {
    return (
        <>
            <div className="mx-auto">
                <h1 className="text-center text-2xl font-bold underline underline-offset-8 decoration-4 decoration-yellow-300">
                    NEWS
                </h1>
                <br />
                <div>
                    <h4 className="text-base font-bold pb-4">
                        Latest News
                    </h4>
                    <div className="border border-slate-100 min-w-[27rem] p-2 space-y-5 text-slate-500 text-[14px]">
                        <div className="border-b border-slate-200">
                            <p>Test 1</p>
                            <p>December 16, 2021</p>
                        </div>
                        <div className="border-b border-slate-200">
                            <p>Test 2</p>
                            <p>December 16, 2021</p>
                        </div>
                        <div className="border-b border-slate-200">
                            <p>Test 3</p>
                            <p>December 16, 2021</p>
                        </div>
                        <div className="border-b border-slate-200">
                            <p>Test 4</p>
                            <p>December 16, 2021</p>
                        </div>
                        <div className="border-b border-slate-200">
                            <p>Test 5</p>
                            <p>December 16, 2021</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default News;