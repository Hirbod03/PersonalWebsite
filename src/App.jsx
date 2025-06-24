import './App.css'
import Navbar from './sections/navBar/navBar'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import BackToTopButton from './sections/BackToTop/BackToTopButton'
import Experience from './sections/Experience/Experience'
import TicTacToe from './sections/Tic-Tac-Toe/TicTacToe'

function App() {
   return (
      <>
         <Navbar />
         <div style={{ paddingTop: '70px' }}>
            <div id="hero"><Hero /></div>
            <div id="experience"><Experience /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="tictactoe"><TicTacToe /></div>
            <div id="contact"><Contact /></div>
         </div>
         <BackToTopButton /> 
      </>
   )
}

export default App