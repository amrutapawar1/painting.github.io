import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';
import { footerLinks } from './links';
import styles from './Footer.module.css'
import Link from 'next/link';

const FooterLinks: FC = (): ReactElement => {
  return (
    <Grid container spacing={0}>
      {
        footerLinks.map((linksData, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index}  className='pl-1'>
            <Typography className={styles.footerHeading}>{linksData.name}</Typography>
            {
              linksData.items.map((subLink, index) => (
                <Grid item key={index} className={styles.footerLink}>
                  <Link href={subLink.href}>{subLink.name}</Link>
                </Grid>
              ))
            }
          </Grid>
        ))
      }
    </Grid>
  )
}

export default FooterLinks;