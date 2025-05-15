import { Box, Typography, Container, Grid, Stack } from '@mui/material'

const skills = [
  {
    category: 'Frontend & UI',
    items: [
      { name: 'React.js', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Redux', slug: 'redux' },
      { name: 'React Hooks', slug: 'react' }, // same icon
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
        background: 'linear-gradient(to bottom, #f4f6fa, #ffffff)',
        px: 2,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'inline-block',
            border: '2px solid',
            borderColor: 'text.primary',
            px: 4,
            py: 1,
            mb: 6,
          }}
        >
          <Typography variant="h5" fontWeight={700} letterSpacing={2}>
            SKILLS
          </Typography>
        </Box>

        {skills.map((group, idx) => (
          <Box key={idx} sx={{ mb: 6 }}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 3, textTransform: 'uppercase' }}
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
                      color="text.primary"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        textAlign: 'center',
                      }}
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
