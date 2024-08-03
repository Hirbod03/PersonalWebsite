import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import BackToTopButton from './sections/BackToTop/BackToTopButton'
import Experience from './sections/Experience/Experience'

function App() {
   return (
      <>
         <Hero />
         <Skills />
         {/* <Experience /> */}
         <Projects />
         <Contact />
         <BackToTopButton /> 
      </>
   )
}

export default App
