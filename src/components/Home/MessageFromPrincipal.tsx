import Image from "next/image";

const MessageFromPrincipal = () => {
    return (
        <>
            <div className="pr-5 col-span-2">
                <h1 className="text-center text-2xl font-bold underline underline-offset-8 decoration-4 decoration-yellow-300">
                    MESSAGE FROM PRINCIPAL
                </h1>
                <br /><br />
                <Image src="/principal.jpg" alt="principal" width={300} height={180}></Image>
                <p className="text-justify">
                    It is a privilege on my part to drop few words of appreciation
                    to all of our Management Committee, Guardians and ex-students
                    for their sincere effort and timely suggestions to boost this
                    institution to reach to this extend. I am specially thankful
                    to all the associates of this institution who worked hand in
                    hand together to provide it a present day look. Yet a lot has
                    to be done to actualize the dream of Public Model. It was
                    impossible without the great initiation of our parents, our
                    diligent students, and the dedicated teaching and non-teaching
                    staff as well as the kind assistance of the management
                    committee, who extend their helping hands to destine the
                    present status of Public Model.
                </p>
            </div>
        </>
    )
}

export default MessageFromPrincipal;