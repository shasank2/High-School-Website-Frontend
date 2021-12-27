import { useState } from "react"

const HomePopup = () => {
    const [state,setState] = useState('absolute')

    const handleClose=()=>{
        return setState('none')
    }
    return (
        <>
            <div className="w-full h-full flex place-content-center bg-slate-600/[0.8] absolute  z-[100]"  style={{display: state}}>
                <div className="bg-gray-200 w-[40rem] h-[30rem] relative my-auto border rounded-lg">
                    <div className="m-5 flex justify-between">
                        <span className="p-2">
                            Admission open
                        </span>
                        <span onClick={()=>handleClose()}
                         className="bg-red-500 text-center w-[1.4rem] h-[1.8rem] cursor-pointer">
                            x
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePopup;