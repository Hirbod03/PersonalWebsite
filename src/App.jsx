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

// Main App component
function App() {
   return (
      <>
         {/* Navigation bar at the top */}
         <Navbar />
         {/* Main content with top padding to avoid overlap with navbar */}
         <div style={{ paddingTop: '70px' }}>
            {/* Hero section */}
            <div id="hero"><Hero /></div>
            {/* Experience section */}
            <div id="experience"><Experience /></div>
            {/* Skills section */}
            <div id="skills"><Skills /></div>
            {/* TicTacToe game section */}
            <div id="tictactoe"><TicTacToe /></div>
            {/* Contact section */}
            <div id="contact"><Contact /></div>
         </div>
         {/* Back to top button */}
         <BackToTopButton /> 
      </>
   )
}

export default App