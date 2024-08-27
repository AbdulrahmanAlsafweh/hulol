import AboutUsPage from "../components/AboutUs";
import ContactUs from "../components/contactUs";
import FooterPage from "../components/Footer";
import HelpPage from "../components/HelpYou";
import NavbarPage from "../components/Navbar";
import LocationPage from "../components/ourLocation";
import Whatsapp from "../components/whatsapp";


export default function HomePage(){
    return (
      <>
        <NavbarPage />
        <AboutUsPage />
        <HelpPage />
        <Whatsapp />
        <ContactUs />
        <LocationPage />
        {/* <FooterPage /> */}
      </>
    );
}