import Image from "next/image";

const CourseItem = ({ courseobject }: any) => {
    return (
        <>
            <div className="text-justify my-5 px-2 text-sm border border-gray-100">
                <div className="mx-auto w-fit">
                    <Image src="/Science.jpg" alt="alt" width={250} height={180}></Image>
                </div>
                <br /><br />
                <p className="text-center font-bold">{courseobject.courseName}</p>
                <br />
                <p>{courseobject.courseDesc}</p>
            </div>
        </>
    )
}

export default CourseItem;