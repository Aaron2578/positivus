import Banner from "./components/Banner"
import CaseStudies from "./components/CaseStudies"
import Contact_Banner from "./components/Contact_Banner"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Teams from "./components/Teams"
import WorkProcess from "./components/WorkProcess"
import Testimonials from "./components/Testimonials"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
      <Contact_Banner />
      <CaseStudies />
      <WorkProcess />
      <Teams />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
