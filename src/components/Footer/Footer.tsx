import FooterAbout from './FooterAbout'
import FooterSupport from './FooterSupport'
import FooterContactInfo from './FooterContactInfo'
import FooterIcons from './FooterIcons'
import { footerobject } from '../../Objects/FooterObjects'

const Footer = () => {
    return (
        <>
            <div className='bottom-0 px-16 text-gray-400 bg-slate-600 grid xl:grid-cols-4 lg:grid-cols-2 h-fit flex justify-items-center w-full'>
                <FooterAbout/>
                <FooterSupport/>
                <FooterContactInfo/>
                <FooterIcons/>
            </div>
        </>
    )
}


export default Footer
