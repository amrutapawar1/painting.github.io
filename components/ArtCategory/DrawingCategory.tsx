import React, { FC, ReactElement } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import styles from './ArtCategory.module.css';
import drawing_img from "../HomePage/images/category1.png";
import Image from 'next/image';
import { DRAWING_CATEGORY_LINKS } from '../Common/Header/LinksData';

const DrawingCategory: FC = (): ReactElement => {
    return (
        <Grid container spacing={2}>
            <Grid item md={4} lg={4}>
                <Image src={drawing_img} alt='drawing' className={styles.img_style} />
            </Grid>
            {
                DRAWING_CATEGORY_LINKS.map((linksData, index) => (
                    <Grid item md={4} lg={4} key={index}>
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

export default DrawingCategory;