import React from "react";
import { Box } from '@mui/material';
import styles from './SocialIcon.module.css';
import {
  FacebookOutlined as FacebookIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import Link from 'next/link';

const SocialIcon = () => {
  return (
    <Box className={styles.icon}>
      <Link href='#' className={styles.socialLinks} ><FacebookIcon className={styles.linkIcon} /></Link>
      <Link href='#' className={styles.socialLinks} ><InstagramIcon className={styles.linkIcon} /></Link>
      <Link href='#' className={styles.socialLinks} ><LinkedInIcon className={styles.linkIcon} /></Link>
    </Box>
  );
};
export default SocialIcon;
