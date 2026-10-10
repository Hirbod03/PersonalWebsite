import { Suspense, lazy } from 'react'
// Import global styles
import './App.css'

// Eager components (above-the-fold)
import Navbar from './sections/navBar/navBar'
import Hero from './sections/Hero/Hero'

// Lazy-load below-the-fold components to shorten critical path
const Experience = lazy(() => import('./sections/Experience/Experience'))
const Skills = lazy(() => import('./sections/Skills/Skills'))
const TicTacToe = lazy(() => import('./sections/Tic-Tac-Toe/TicTacToe'))
const Contact = lazy(() => import('./sections/Contact/Contact'))
const BackToTopButton = lazy(() => import('./sections/BackToTop/BackToTopButton'))
const Footer = lazy(() => import('./sections/Footer/Footer'))

const SectionPlaceholder = ({ minHeight }) => (
   <div style={{ minHeight, width: '100%' }} aria-hidden="true" />
)

// Main App component
function App() {
   return (
      <>
         {/* Navigation bar at the top */}
         <Navbar />
         {/* Main content with top padding to avoid overlap with navbar */}
         <main style={{ paddingTop: '70px', scrollBehavior: 'smooth' }} aria-label="Main content">
            {/* Hero section */}
            <section id="hero" tabIndex={-1} aria-label="Hero section"><Hero /></section>
            {/* Experience section */}
                  <section id="experience" tabIndex={-1} aria-label="Experience section">
                     <Suspense fallback={<SectionPlaceholder minHeight="520px" />}>
                        <Experience />
                     </Suspense>
                  </section>
            {/* Skills section */}
                  <section id="skills" tabIndex={-1} aria-label="Skills section">
                     <Suspense fallback={<SectionPlaceholder minHeight="320px" />}>
                        <Skills />
                     </Suspense>
                  </section>
            {/* TicTacToe game section */}
                  <section id="tictactoe" tabIndex={-1} aria-label="Tic Tac Toe game">
                     <Suspense fallback={<SectionPlaceholder minHeight="360px" />}>
                        <TicTacToe />
                     </Suspense>
                  </section>
            {/* Contact section */}
                  <section id="contact" tabIndex={-1} aria-label="Contact section">
                     <Suspense fallback={<SectionPlaceholder minHeight="480px" />}>
                        <Contact />
                     </Suspense>
                  </section>
         </main>
         {/* Back to top button */}
             <Suspense fallback={null}>
                <BackToTopButton /> 
             </Suspense>
      </>
   )
}

export default App