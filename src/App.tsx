import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <Box >
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </Box>
  );
}

export default App;
