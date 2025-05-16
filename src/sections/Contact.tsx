import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link as MuiLink,
  CircularProgress,
  Stack,
} from '@mui/material'
import { GitHub, LinkedIn, Email, Download } from '@mui/icons-material'
import SectionTitle from '../components/SectionTitle'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/mldbayez', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSuccessMessage('Thanks! Your message has been sent.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSuccessMessage('Something went wrong. Please try again later.')
      }
    } catch {
      setSuccessMessage('Error connecting to server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box id="contact" sx={{ py: 12 }}>
      <Container maxWidth="sm">
        <SectionTitle title="Contact Me" />

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
          />

          <Button
            type="submit"
            disabled={loading}
            variant="contained"
            sx={{
              bgcolor: 'black',
              color: 'white',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: '999px',
              px: 4,
              py: 1.25,
              alignSelf: 'center',
              '&:hover': { bgcolor: 'grey.800' },
            }}
          >
            {loading ? (
              <CircularProgress size={20} sx={{ color: 'white' }} />
            ) : (
              'Send Message'
            )}
          </Button>

          {successMessage && (
            <Typography
              variant="body2"
              textAlign="center"
              mt={1}
              color="text.secondary"
            >
              {successMessage}
            </Typography>
          )}
        </Box>

        <Box mt={8} textAlign="center">
          <Typography variant="body1" gutterBottom>
            Or reach me directly:
          </Typography>

          <Stack direction="row" justifyContent="center" spacing={3}>
            <MuiLink href="mailto:clint@example.com" target="_blank">
              <Email fontSize="medium" />
            </MuiLink>
            <MuiLink
              href="https://linkedin.com/in/clintjose08"
              target="_blank"
              rel="noopener"
            >
              <LinkedIn fontSize="medium" />
            </MuiLink>
            <MuiLink
              href="https://github.com/clintjose08"
              target="_blank"
              rel="noopener"
            >
              <GitHub fontSize="medium" />
            </MuiLink>
            <MuiLink href="/resume.pdf" target="_blank" rel="noopener">
              <Download fontSize="medium" />
            </MuiLink>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
