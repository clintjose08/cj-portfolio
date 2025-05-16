import { Box, Typography, Container, Grid } from '@mui/material'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import GroupsIcon from '@mui/icons-material/Groups'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import SectionTitle from '../components/SectionTitle'

const highlights = [
  {
    title: 'Frontend Architecture',
    description:
      'Designed and led front-end architecture for large-scale React + TypeScript apps, focusing on performance, scalability, and maintainability.',
    icon: <AccountTreeIcon fontSize="large" />,
  },
  {
    title: 'AI-powered UX',
    description:
      'Integrated intelligent pricing models into real-time interfaces, enabling smarter decision-making through AI-powered workflows.',
    icon: <SmartToyIcon fontSize="large" />,
  },
  {
    title: 'Cross-functional Delivery',
    description:
      'Collaborated with product, design, backend, and data science teams to deliver impactful, user-centered features efficiently.',
    icon: <GroupsIcon fontSize="large" />,
  },
  {
    title: 'Real-time Interactions',
    description:
      'Built seamless real-time interfaces using GraphQL and WebSockets, supporting responsive, data-driven seat-level pricing UX.',
    icon: <SyncAltIcon fontSize="large" />,
  },
  {
    title: 'Mentorship & Ownership',
    description:
      'Mentored engineers, led architectural reviews, and took ownership of core modules from planning to deployment.',
    icon: <EmojiPeopleIcon fontSize="large" />,
  },
]

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle title="About Me" />

        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="md"
          mx="auto"
          textAlign="center"
          mb={8}
        >
          I’m a Senior Frontend Engineer with 10+ years of experience building
          complex, high-performance applications. I lead projects with a focus
          on architecture, real-time UX, and seamless team collaboration —
          always aiming for scalable, impactful solutions.
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {highlights.map((item, idx) => (
            <Grid
              item
              key={idx}
              xs={12}
              sm={6}
              md={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                display="flex"
                alignItems="flex-start"
                gap={2}
                maxWidth="360px"
              >
                <Box mt="4px" color="#a8a6a4">
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default About
