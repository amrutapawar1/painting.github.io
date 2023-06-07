import React, { FC, ReactElement } from 'react';
import { Divider, Grid, Typography, Box } from '@mui/material';
import Link from 'next/link';
import styles from './ArtCategory.module.css';
import painting_img from "../HomePage/images/category3.png";
import Image from 'next/image';
import { PAINTING_CATEGORY_LINKS } from '../Common/Header/LinksData';

const PaintingCategory: FC = (): ReactElement => {
    return (
        <Grid container spacing={2} className={styles.paintingContainer}>
            <Grid item md={4} lg={3}>
                <Image src={painting_img} alt='painting' className={styles.img_style} />
            </Grid>
            {
                PAINTING_CATEGORY_LINKS.map((linksData, index) => (
                    <Grid item md={2.6} lg={3} key={index}>
                        <Box className={styles.stickyHeader}>
                            <Typography className={styles.category_link_title}>{linksData.name}</Typography>
                            <Divider />
                        </Box>
                        {
                            linksData.items.map((subLink, index) => (
                                <Grid item key={index} className='mb-1'>
                                    <Link href={subLink.href} className={styles.category_link_subTitle}>{subLink.name}</Link>
                                </Grid>
                            ))
                        }
                    </Grid>
                ))
            }
        </Grid>
    )
}
export default PaintingCategory;