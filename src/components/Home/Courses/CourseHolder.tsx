import CourseItem from "./CourseItem";
import { courseobject } from "../../../Objects/CoursesObject";

const CourseHolder = () => {
    return (
        <>
            <div className="px-16 py-10 ">
                <h1 className="text-center text-2xl font-bold underline underline-offset-8 decoration-4 decoration-yellow-300">
                    PUBLIC ACADEMIC PROGRAM
                </h1>
                <br />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 space-x-3">
                    {
                        courseobject.map((elem) => (
                            <div key={elem.id}>
                                <CourseItem courseobject={elem} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default CourseHolder;