import React, { FC, ReactElement } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import styles from './Footer.module.css'
import FooterLinks from './FooterLinks';
import SocialIcon from '../../Common/Icons/SocialIcon';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

const currentYear = new Date().getFullYear();
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const Footer: FC = (): ReactElement => {

  return (
    <Container className={styles.footer_container}>
      <Box className={styles.footer}>
        <FooterLinks />
      </Box>
      <Box className='ta-c mb-2'>
        <Typography className={styles.footerSubtitle}>{`Copyright ©${currentYear}| All Rights Reserved`}</Typography>
        <SocialIcon />
      </Box>
      <Button onClick={topFunction} className={styles.myBtn} title="Go to top"><VerticalAlignTopIcon /></Button>
    </Container>
  )
}

export default Footer;