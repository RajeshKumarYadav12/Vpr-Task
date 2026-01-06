import HomePage from './HomePage'
import Services from './Services'
import Clients from './Clients'
import Portfolio from './Portfolio'
import AboutPage from './AboutPage'
import Contact from './Contact'
import "./css/App.css";

const AllSections = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <Clients />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  )
}

export default AllSections
