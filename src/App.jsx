
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import JustForYou from './components/JustForYou'
import Locations from './components/Locations'
import Navbar from './components/Navbar'
import Social from './components/Social'


function App() {

  return (
    <>
     <Navbar/>
     <About/>
    <JustForYou/>
    <Social/>
    <Gallery/>
    <Locations/>
     <Contact/>
    </>
  )
}

export default App
