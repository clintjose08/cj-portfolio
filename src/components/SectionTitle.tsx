import { Box, Typography } from '@mui/material'

const SectionTitle = ({ title }: { title: string }) => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      mb: 6,
    }}
  >
    <Box
      sx={{
        border: '3px solid black',
        px: 6,
        py: 1.5,
      }}
    >
      <Typography variant="h6" fontWeight={700} letterSpacing={3}>
        {title.toUpperCase()}
      </Typography>
    </Box>
  </Box>
)

export default SectionTitle
