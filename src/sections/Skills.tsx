import { Box, Typography, Container, Grid, Stack } from '@mui/material'
import SectionTitle from '../components/SectionTitle'

const skills = [
  {
    category: 'Frontend & UI',
    items: [
      { name: 'React.js', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Redux', slug: 'redux' },
      { name: 'React Hooks', slug: 'react' },
      { name: 'Material UI', slug: 'materialui' },
      { name: 'Vite', slug: 'vite' },
      { name: 'CSS3', slug: 'css' },
      { name: 'HTML5', slug: 'html' },
    ],
  },
  {
    category: 'Architecture & Tooling',
    items: [
      { name: 'GraphQL', slug: 'graphql' },
      { name: 'REST APIs', slug: 'postman' },
      { name: 'WebSockets', slug: 'socketio' },
      { name: 'Jest', slug: 'jest' },
      { name: 'Git', slug: 'git' },
      { name: 'i18Next', slug: 'i18next' },
      { name: 'Optimizely', slug: 'optimizely' },
      { name: 'Postman', slug: 'postman' },
    ],
  },
  {
    category: 'Workflow & DevOps',
    items: [
      { name: 'AWS', slug: 'aws' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Jenkins', slug: 'jenkins' },
      { name: 'Jira', slug: 'jira' },
      { name: 'CI/CD', slug: 'githubactions' },
      { name: 'Agile', slug: 'scrum' },
      { name: 'Figma', slug: 'figma' },
      { name: 'Confluence', slug: 'atlassian' },
    ],
  },
]

const getIconUrl = (slug: string) => `https://skillicons.dev/icons?i=${slug}`

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle title="Skills" />

        {skills.map((group, idx) => (
          <Box key={idx} sx={{ mb: 6 }}>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              textAlign="center"
              gutterBottom
              sx={{ textTransform: 'uppercase' }}
            >
              {group.category}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {group.items.map((item, i) => (
                <Grid item xs={6} sm={4} md={2} key={i}>
                  <Stack spacing={1} alignItems="center">
                    <Box
                      component="img"
                      src={getIconUrl(item.slug)}
                      alt={item.name}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, textAlign: 'center' }}
                    >
                      {item.name}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default Skills
