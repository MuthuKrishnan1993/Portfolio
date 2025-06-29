import AboutMe from "../components/AboutMe";
import AdvertiseMe from "../components/AdvertiseMe";
import ContactUs from "../components/ContactUs";
import HomePage from "../components/HomePage";
import Speciality from "../components/Speciality";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import TimelineScroll from "../components/TimelineScroll";

function Home() {
  return (
    <>
      <HomePage />
      <AdvertiseMe />
      <AboutMe />
      <Speciality />
      <TimelineScroll />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Home;
