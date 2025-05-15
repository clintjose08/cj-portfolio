import {
  AppBar,
  Toolbar,
  Box,
  Link,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.3) // 30% scroll
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        bgcolor: scrolled ? 'white' : 'transparent',
        color: scrolled ? 'black' : 'white',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1300,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: 'space-between',
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: scrolled ? 1.5 : 2,
          minHeight: { xs: 64, md: 72 }, // reduced from 80
          transition: 'padding 0.3s ease-in-out',
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src="/assets/logo-cj-black.png"
          alt="CJ Logo"
          sx={{
            height: 44,
            transition: 'filter 0.3s ease',
          }}
        />

        {/* Links */}
        <Stack direction="row" spacing={3} alignItems="center">
          {['About', 'Projects', 'Contact'].map(label => (
            <Link
              key={label}
              href={`#${label.toLowerCase()}`}
              underline="none"
              sx={{
                color: 'inherit',
                fontWeight: 500,
                fontSize: isMobile ? 14 : 16,
              }}
            >
              {label}
            </Link>
          ))}

          <Button
            variant="contained"
            href="#contact"
            sx={{
              bgcolor: scrolled ? 'black' : 'white',
              color: scrolled ? 'white' : 'black',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: '999px',
              px: 3,
              py: 1,
              fontSize: 14,
              '&:hover': {
                bgcolor: scrolled ? 'grey.900' : 'grey.200',
              },
            }}
          >
            Contact Me
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
