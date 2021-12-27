import Image from "next/image"

const HomeAbout = () => {
    return (
        <>
            <div className="my-10 px-16 ">
                <h1 className="text-center text-2xl font-bold underline underline-offset-8 decoration-4 decoration-yellow-300">
                    ABOUT US
                </h1>
                <br />
                <div className="grid md:grid-cols-1 gap-4 lg:grid-cols-2">
                    <span className="text-justify">
                        Public Model Secondary School was established in B.S 2022.
                        It is situated at previously known as&nbsp; Siyari-4,
                        Rupandehi previously known as Dayanagar, 15 K.m west from
                        Bhairahawa and 20 K.m south from Butwal. With more than
                        50 years of its service more than thousand students have
                        passed and institute currently has more than 1500 students
                        and the number is expected to rise in coming years. Currently
                        we are offering our service from class one to class ten,
                        Science Management and Education faculty in class 11 &amp;
                        12, and Diploma in Civil Engineering and Geomatics
                        Engineering affiliated to CTEVT.
                        <br /><br />

                        With more than 50 years of service we have provided quality
                        education with excellence to more than thousands of student
                        and currently have more than 1500 students associated to
                        this institute in different faculties. In 2076 B.S Nepal
                        Government has announced this institute in list of Model
                        schools. We have proved our excellence in sports and
                        education at local level all schools educational festival
                        by winning secondary level event for all three consecutive
                        years.
                    </span>
                    <span>
                        <Image src="/aboutus.jpg" alt="school about us" width={600} height={400}></Image>
                    </span>
                </div>
            </div>
        </>
    )
}

export default HomeAbout