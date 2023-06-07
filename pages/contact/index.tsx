import React from 'react';
import ContactForm from './ContactForm';
import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './ContactForm.module.css';
import {
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
  Call as CallIcon
} from '@mui/icons-material';
import MapContainer from './MapContainer';

const Contact = () => {
  return (
    <Container>
      <Typography className={styles.title}>Contact</Typography>
      <Typography className={styles.subTitle}>Get in touch and let us know how we can help.</Typography>
      <Box sx={{ marginTop: "var(--spacing-3)", marginBottom: "var(--spacing-3)" }}>
        <MapContainer />
      </Box>
      <Grid container spacing={3} sx={{ padding: "var(--spacing-3) var(--spacing-3) var(--spacing-3) 0", marginLeft: "0" }}>
        <Grid item xs={12} sm={6} md={8} lg={8} xl={8} sx={{ padding: "var(--spacing-3)", border: "1px solid" }}>
          <Typography className={styles.reviewStyle}>write your review</Typography>
          <ContactForm />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
          {infoData.map((item) => (
            <Box key={item.id} className="mb-2">
              <Box className={styles.icon}>{item.icon}</Box>
              <Typography className={styles.infoTitle}>{item.title}</Typography>
              <a href={item.infoLink} target="_blank">{item.info}</a>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact;

const infoData = [
  {
    id: "1",
    icon: <LocationOnIcon />,
    title: "Address",
    info: "1st Floor, T-cube Avenue, Off NH-48, Jeevan Nagar, Tathawade, Pimpri Chinchwad, Pune, Maharashtra, India - 411033",
    infoLink: "https://goo.gl/maps/mYW3LkrRN2u71NhK9"
  },
  {
    id: "2",
    icon: <EmailIcon />,
    title: "Email",
    info: "info@techwing.io",
    infoLink: "mailto:info@techwing.io"
  },
  {
    id: "3",
    icon: <CallIcon />,
    title: "Phone no",
    info: "+91 92091 40225",
    infoLink: "tel:9209140225"
  }
] 