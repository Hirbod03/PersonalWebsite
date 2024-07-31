import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import BackToTopButton from './sections/BackToTop/BackToTopButton'

function App() {
   return (
      <>
         <Hero />
         <Skills />
         <Projects />
         <Contact />
         <BackToTopButton /> 
      </>
   )
}

export default App
