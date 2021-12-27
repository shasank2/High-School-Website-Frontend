import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faBaby } from "@fortawesome/free-solid-svg-icons"

const Card = (props: any) => {
    const { ObjectCard } = props
    return (
        <div>
            <div className="bg-gray-100 max-w-[15rem] min-w-[14rem] h-44 pt-8 flex grid justify-items-center hover:shadow-2xl shadow-gray-500/500 ">
                <div className=" h-[3.5rem] w-[2.5rem]">
                    {ObjectCard.icon}
                </div>
                <p className="text-indigo-600 font-medium">{ObjectCard.title}</p>
            </div>
        </div>
    )
}

export default Card;