import { Box, Typography, IconButton, Stack, Container } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        bgcolor: '#f5f5f5',
      }}
    >
      {/* Left Side (Text) */}
      <Container
        maxWidth="md"
        sx={{
            flex: 4.5,
            py: { xs: 8, md: 12 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 2,
        }}
        >
        <Typography
          variant="h5"
          sx={{ color: 'text.secondary', fontSize: { xs: '1.25rem', md: '1.5rem' } }}
        >
          Hi, I am
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2.75rem', sm: '3.25rem', md: '4rem' },
            lineHeight: 1.2,
            color: 'text.primary',
          }}
        >
          Clint Jose
        </Typography>

        <Typography
          variant="h6"
          sx={{  fontSize: { xs: '1rem', md: '1.25rem' }, color: 'text.secondary' }}
        >
          Senior Frontend Engineer
        </Typography>
        <Typography
          variant="h6"
          sx={{  fontSize: { xs: '1rem', md: '1.25rem' }, color: 'text.secondary' }}
        >
           React · TypeScript · GraphQL · AI-Aware UX
        </Typography>

        <Stack direction="row" spacing={2} mt={4}>
          <IconButton href="mailto:your@email.com">
            <Email fontSize="medium" />
          </IconButton>
          <IconButton href="https://github.com/clintjose08" target="_blank">
            <GitHub fontSize="medium" />
          </IconButton>
          <IconButton href="https://linkedin.com/in/your-linkedin" target="_blank">
            <LinkedIn fontSize="medium" />
          </IconButton>
        </Stack>
      </Container>

      {/* Right Side (Image) */}
      <Box
          sx={{
            flex: 5.5,
            bgcolor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            clipPath: {
              xs: 'none',
              md: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
            },
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
  );
};

export default Hero;
