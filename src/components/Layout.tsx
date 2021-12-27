import Navbar from './Navbar/Navbar';
import NavbarMobile from './Navbar/NavbarMobile';
import Footer from './Footer/Footer'
import AboveNav from './AboveNav'
import HomePopup from '../components/HomePopup'


const Layout = (props: any) => {
    const { children } = props;
    return (
        <>
            <div className='overflow-hidden'>
                {/* <HomePopup /> */}
                <AboveNav />
                <Navbar />
                <NavbarMobile />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
