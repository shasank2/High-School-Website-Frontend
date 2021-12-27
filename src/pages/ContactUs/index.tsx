import { NextPage } from "next";
import Search from "../../components/Search";


const ContactUsPage: NextPage = () => {
    return (
        <>
            <div className="p-10 h-fit bg-gray-100">
                <h1 className="text-2xl font-bold ">Contact Us</h1>
            </div>
            <div className='grid lg:grid-cols-3 p-16'>
                <div className='col-span-2 pb-10 mb-10 bg-gray-100 pt-10 flex-row'>
                    <p className="text-[14px] text-yellow-500 font-medium text-center">WE'D LOVE TO HEAR FROM YOU</p>
                    <p className="text-3xl text-center font-semibold">Stay Connected</p>
                    <br />
                    <hr className="w-16 bg-yellow-500 h-[4px] ml-10" />
                    <br />
                    <p className="text-[11px] text-center">
                        Praesent libero tortor, dapibus mattis vestibulum sit amet,
                        volutpat eget nisi nulla facilisi. <br />
                        Sed vel mauris ultrices, cursus sapien acimperdiet urna.
                    </p>
                    <br />
                    <br />
                    <div className="grid lg:grid-cols-2 px-4 gap-4">

                        <div className="h-[14rem] mx-8 bg-gray-400 flex place-items-center">
                            {/* MAP */}
                            <p className="text-5xl mx-auto">MAP</p>
                        </div>
                        <div className="row-span-2 space-y-5 px-4">
                            <p className="text-center text-xl">Send us message</p>
                            <hr className="w-[3rem] bg-yellow-500 h-[4px] " />
                            <div>
                                <form action="">
                                    <input className="w-[22rem] border p-1 px-2" type="text" placeholder="Full name" /><br />
                                    <br />
                                    <input className="w-[22rem]  border p-1 px-2" type="text" placeholder="Email" /><br />
                                    <br />
                                    <input className="w-[22rem] border p-1 px-2" type="text" placeholder="Subject" /><br />
                                    <br />
                                    <textarea className="w-[22rem] border p-1 px-2" name="" id="" rows={5} placeholder="Your Message"></textarea>
                                    <br />
                                    <button className="px-5 p-1 bg-blue-400 hover:bg-blue-600">Submit</button>
                                </form>
                            </div>

                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-2 text-[10px] gap-4">
                                <div className="space-y-4">
                                    <b> Reach Us Through</b>
                                    <ul className="space-y-1">
                                        <li><a href="#" className="hover:text-blue-500">Chhapiya, Rupandehi</a></li>
                                        <li><a href="#" className="hover:text-blue-500">dilaramkhanal86@gmail.com</a></li>
                                        <li><a href="#" className="hover:text-blue-500">9857043014</a></li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <b> Social Network</b>
                                    <ul className="space-y-1">
                                        <li><a href="#" className="hover:text-blue-500">yourfbusername </a></li>
                                        <li><a href="#" className="hover:text-blue-500">@twitterhandle </a></li>
                                        <li><a href="#" className="hover:text-blue-500">insta_account </a></li>
                                        <li><a href="#" className="hover:text-blue-500">plusprofilename </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Search />
            </div>
        </>
    )
}

export default ContactUsPage;