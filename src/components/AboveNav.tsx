import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const AboveNav = () => {
    return (
        <>
            <div className="grid lg:grid-cols-4 gap-5 justify-items-center px-16 py-1 text-red-500 text-sm">
                <div>Chhapiya, Rupandehi</div>
                <div>dilaramkhanal86@gmail.com</div>
                <div>9857043014</div>
                <div className="col-end-8 flex row space-x-[2rem]">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
        </>
    )
}

export default AboveNav