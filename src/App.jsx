import Banner from "./components/Banner"
import CaseStudies from "./components/CaseStudies"
import Contact_Banner from "./components/Contact_Banner"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Teams from "./components/Teams"
import WorkProcess from "./components/WorkProcess"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
      <Contact_Banner />
      <CaseStudies />
      <WorkProcess />
      {/* <Teams /> */}
      <Testimonials />
    </div>
  )
}

export default App
