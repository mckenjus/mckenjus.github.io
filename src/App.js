import './App.css';
import './styles.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from'./components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <Hero></Hero>
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
    </div>
  );
}

export default App;
