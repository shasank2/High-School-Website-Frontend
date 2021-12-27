const Search = () => {
    return (
        <>
            <div className='ml-10 pl-8 border-l border-slate-300 space-y-4 lg:py-0 md:py-8'>
                <div className='border mx-5 p-2 '>
                    <input type="search" placeholder="Search.." />
                </div>
                <div className='space-y-[1.3rem] text-[13px]'>
                    <p className='border-l-2 border-blue-400 px-4'>Recent Comments</p>
                    <p className='border-l-2 border-blue-400 px-4'>Archives</p>
                    <p className='border-l-2 border-blue-400 px-4'>Categories</p>
                    <p className='text-[13px] border-y p-2'>No Category</p>
                    <p className='border-l-2 border-blue-400 px-4'>Meta</p>
                    <ul className='space-y-2'>
                        <li><a href="#" className='hover:text-blue-500'>Log In</a> </li>
                        <li><a href="#" className='hover:text-blue-500'>Entires Feed</a></li>
                        <li><a href="#" className='hover:text-blue-500'>Comments Feed</a></li>
                        <li><a href="#" className='hover:text-blue-500'>Wordpress.org</a></li>
                    </ul>
                    <p className='border-l-2 border-blue-400 px-4'>
                        The Champion School Texas
                    </p>
                    <p>
                        1234 Demo Ave, Austin, TX 56789,<br />
                        United States.
                    </p>
                </div>
            </div>

        </>
    )
}
export default Search