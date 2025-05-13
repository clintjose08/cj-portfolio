import { AppBar, Toolbar, Typography, Link, Stack, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        color: 'white',
        px: 4,
        pt: 2,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: 'space-between',
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="#hero"
          sx={{
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.25rem',
          }}
        >
          Clint Jose
        </Typography>

        <Stack direction="row" spacing={4} alignItems="center">
          <Link href="#about" underline="none" sx={{ color: 'inherit', fontWeight: 500 }}>
            About
          </Link>
          <Link href="#projects" underline="none" sx={{ color: 'inherit', fontWeight: 500 }}>
            Projects
          </Link>
          <Link href="#contact" underline="none" sx={{ color: 'inherit', fontWeight: 500 }}>
            Contact
          </Link>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: 'black',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: '999px',
              px: 3,
              py: 1,
              '&:hover': {
                bgcolor: 'grey.200',
              },
            }}
            href="#contact"
          >
            Contact Me
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
