import { useState } from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Collapse,
  Divider,
  Button,
} from '@mui/material'

const projects = [
  {
    title: 'RMS2 – Revenue Management System',
    summary:
      'AI-powered seat-level pricing engine used across 2,300+ performances to boost revenue and speed up decisions.',
    image: '/assets/ATGTickets.png',
    details: `Led the front-end architecture using React, TypeScript, and GraphQL. Implemented real-time WebSocket updates, seatmap visualization, and AI-driven pricing logic. Collaborated with data science, backend, and UX teams to deliver a robust tool that increased Gross Box Office by 5%.`,
    tech: ['React', 'TypeScript', 'GraphQL', 'WebSockets', 'AWS', 'Vite'],
  },
  {
    title: 'Checkout & Seat Selection Redesign',
    summary:
      'Modernized checkout UX with dynamic seatmaps and price-aware interactions. Integrated Optimizely for A/B testing.',
    image: 'assets/ATGTickets.png',
    details: '',
    tech: ['React', 'Material UI', 'Optimizely', 'Redux'],
  },
  {
    title: 'IoT Water Dashboard – South East Water',
    summary:
      'Interactive web app for monitoring digital water meters and real-time usage health across utility infrastructure.',
    image: 'assets/ATGTickets.png',
    details: '',
    tech: ['React', 'GraphQL', 'Azure Maps', 'MSAL'],
  },
  {
    title: 'CI/CD Automation Platform',
    summary:
      'Internal platform to automate deployments with custom load balancer logic and dashboard views.',
    image: 'assets/ATGTickets.png',
    details: '',
    tech: ['Node.js', 'React', 'Docker', 'Git'],
  },
  {
    title: 'Experimentation & Feature Flags',
    summary:
      'Integrated Optimizely into multiple flows to enable A/B testing and product experimentation at scale.',
    image: 'assets/ATGTickets.png',
    details: '',
    tech: ['Optimizely', 'React', 'Analytics'],
  },
  {
    title: 'Internationalisation Platform',
    summary:
      'Built multi-language and currency support using i18Next to enable global launches.',
    image: 'assets/ATGTickets.png',
    details: '',
    tech: ['React', 'i18Next', 'JavaScript'],
  },
]

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index)
  }

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <Box id="projects" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" mb={6}>
          <Box
            sx={{
              border: '3px solid black',
              px: 4,
              py: 1,
              textAlign: 'center',
              letterSpacing: 3,
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              PROJECTS
            </Typography>
          </Box>
        </Box>

        {displayedProjects.map((project, index) => {
          const isEven = index % 2 === 0
          const isOpen = expanded === index

          return (
            <Box key={index} mb={12}>
              <Grid container spacing={4} alignItems="center">
                <Grid
                  item
                  xs={12}
                  md={5}
                  order={{ xs: 1, md: isEven ? 1 : 3 }}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    onClick={() => toggleExpand(index)}
                    sx={{
                      width: '100%',
                      maxWidth: 480,
                      height: 'auto',
                      maxHeight: 360,
                      objectFit: 'contain',
                      borderRadius: 2,
                      cursor: 'pointer',
                      boxShadow: 3,
                    }}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={1}
                  order={2}
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                  }}
                >
                  <Divider orientation="vertical" flexItem />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  order={{ xs: 3, md: isEven ? 3 : 1 }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', md: 'center' },
                    px: { xs: 2, md: 4 },
                  }}
                >
                  <Box sx={{ maxWidth: 460 }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {project.summary}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <Box mt={4} p={3} bgcolor="#f9f9f9" borderRadius={2}>
                  <Typography variant="body1" mb={2}>
                    {project.details}
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {project.tech.map((tech, i) => (
                      <Box
                        key={i}
                        sx={{
                          px: 2,
                          py: 0.5,
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderRadius: '999px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Collapse>
            </Box>
          )
        })}
        <Box display="flex" justifyContent="center">
          <Button
            variant="outlined"
            onClick={() => setShowAll(prev => !prev)}
            sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
          >
            {showAll ? 'Show Less Projects' : 'View More Projects'}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Projects
