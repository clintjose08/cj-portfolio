import { CssBaseline, Box } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Summary from './sections/Summary'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </Box>
  )
}

export default App
