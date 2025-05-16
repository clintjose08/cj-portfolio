import { Box, Typography, IconButton, Stack } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        bgcolor: '#f5f5f5',
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          flex: 4,
          bgcolor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 3, md: 19 },
        }}
      >
        <Box>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Hi, I am
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.75rem', sm: '3.25rem', md: '4rem' },
              lineHeight: 1.2,
            }}
          >
            Clint Jose
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Senior Frontend Engineer
          </Typography>
          <Typography variant="h6" color="text.secondary">
            React · TypeScript · GraphQL · AI-Aware UX
          </Typography>
          <Stack direction="row" spacing={2} mt={4}>
            <IconButton href="mailto:your@email.com">
              <Email />
            </IconButton>
            <IconButton href="https://github.com/clintjose08">
              <GitHub />
            </IconButton>
            <IconButton href="https://linkedin.com/in/your-linkedin">
              <LinkedIn />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 6,
          bgcolor: '#000',
          clipPath: {
            xs: 'none',
            md: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Box
          component="img"
          src="/assets/profile-placeholder.png"
          alt="Clint Jose"
          sx={{
            width: { xs: '70%', sm: '300px', md: '380px' },
            borderRadius: 4,
            boxShadow: 6,
          }}
        />
      </Box>
    </Box>
  )
}

export default Hero
