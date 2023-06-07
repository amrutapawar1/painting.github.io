import React, { FC, ReactElement } from "react";
import { Typography, Container, Button, Stack, Box } from "@mui/material";
import styles from "./About.module.css";

const BrandingSection: FC = (): ReactElement => {
  return (
    <Container className={styles.branding_section}>
      <Typography className={styles.branding_title}>
        Best Way to<br />Grow Your Brand
      </Typography>
      <Typography className={styles.branding_subtitle}>
        Praesent ut neque,Praesent tempor. Augue ac tempus finibus.{" "}
      </Typography>
      <Box className='mt-1'>
        <Button className={styles.branding_btn1}>Read More</Button>
        <Button className={styles.branding_btn2}>Discover</Button>
      </Box>
    </Container>
  );
};
export default BrandingSection;
