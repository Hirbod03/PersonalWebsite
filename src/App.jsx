// Import global styles
import './App.css'

// Import section components
import Navbar from './sections/navBar/navBar'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills' 
import Contact from './sections/Contact/Contact'
import BackToTopButton from './sections/BackToTop/BackToTopButton'
import Experience from './sections/Experience/Experience'
import TicTacToe from './sections/Tic-Tac-Toe/TicTacToe'
import Footer from './sections/Footer/Footer'

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
            <section id="experience" tabIndex={-1} aria-label="Experience section"><Experience /></section>
            {/* Skills section */}
            <section id="skills" tabIndex={-1} aria-label="Skills section"><Skills /></section>
            {/* TicTacToe game section */}
            <section id="tictactoe" tabIndex={-1} aria-label="Tic Tac Toe game"><TicTacToe /></section>
            {/* Contact section */}
            <section id="contact" tabIndex={-1} aria-label="Contact section"><Contact /></section>
         </main>
         {/* Back to top button */}
         <BackToTopButton /> 
         {/* Simple footer for spacing */}
         <Footer />
      </>
   )
}

export default App