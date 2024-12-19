import { useState } from 'react'
import Loading from './components/Loading'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Home from './sections/Home'
import NavBar from './sections/NavBar'
import Projects from './sections/Projects'

function App() {
  const [loaded,setLoaded]=useState(false)
  return (
    <div className='w-full min-h-[90dvh] pt-5 font-heebo'>
      
      {/* at first show the loading animation for few sec */}
      <Loading setLoaded={setLoaded}></Loading>

    {/* if loading animation expires then load all the pages */}
     {
      loaded && <>
      <NavBar></NavBar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      </>
     }
      
    </div>
  )
}

export default App
