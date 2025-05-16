import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material'
import { GitHub, LinkedIn, Email, KeyboardArrowUp } from '@mui/icons-material'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 6,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={2}
      >
        <IconButton
          component={Link}
          to="hero"
          smooth
          duration={500}
          sx={{ color: 'white' }}
        >
          <KeyboardArrowUp />
        </IconButton>
        <Typography variant="caption" color="white">
          Back to top
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" gap={4} mb={2}>
        <Typography
          component={Link}
          to="about"
          smooth
          duration={500}
          sx={{
            cursor: 'pointer',
            color: 'white',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          About
        </Typography>
        <Typography
          component={Link}
          to="projects"
          smooth
          duration={500}
          sx={{
            cursor: 'pointer',
            color: 'white',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Projects
        </Typography>
        <Typography
          component={Link}
          to="contact"
          smooth
          duration={500}
          sx={{
            cursor: 'pointer',
            color: 'white',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Contact
        </Typography>
      </Box>

      <Typography variant="body2" mb={4} mt={8}>
        © {new Date().getFullYear()} Clint Jose. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
