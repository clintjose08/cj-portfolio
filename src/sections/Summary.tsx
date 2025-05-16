import { Box, Typography, Button, Container } from '@mui/material'

const Summary = () => {
  return (
    <Box
      sx={{
        bgcolor: 'grey.900',
        color: 'grey.100',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: 'primary.main',
          }}
        >
          Elevating Pricing Intelligence
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            lineHeight: 1.75,
            mb: 3,
            maxWidth: { md: '75%' },
          }}
        >
          I led the front-end architecture and UX for RMS2, our AI-powered
          seat-level pricing engine used across 2,300+ live performances. With
          real-time seat data, intuitive tools, and deep GraphQL integrations,
          we enabled revenue growth of 5%+ while reducing decision latency for
          revenue managers.
        </Typography>

        <Button
          variant="text"
          href="#projects"
          sx={{
            color: 'grey.100',
            borderBottom: '2px solid',
            borderRadius: 0,
            px: 0,
            py: 0.5,
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: 1,
            '&:hover': {
              borderColor: 'primary.main',
              color: 'primary.main',
              bgcolor: 'transparent',
            },
          }}
        >
          Read More
        </Button>
      </Container>
    </Box>
  )
}

export default Summary
