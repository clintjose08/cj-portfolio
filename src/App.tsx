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
        <Box
          sx={{
            background: `radial-gradient(circle at center, #f8f8f8 0%, #e6e6e6 40%, #e8e5e5 70%, #e1dede 100%)`,
            pt: 8,
          }}
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <Footer />
      </main>
    </Box>
  )
}

export default App
