import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './ArtCategory.module.css';
import { LinkViewMap } from './LinkUtils';
import CardComponent from './CardComponent';
import { Routes } from '../../routes/pageRoutes';

const Categories = [
    {
        id: 'abstractPaintings',
        title: 'Abstract Paintings',
        path: Routes.home,
        renderer: 'category',
        subCategories: [
            {
                id: 1,
                title: 'Abstract Paintings',
            }
        ]
    },
    {
        id: 'architecturePaintings',
        title: 'Architecture Paintings',
        path: Routes.login,
        renderer: 'category',
    },
    {
        id: 'classicistsPaintings',
        title: 'Classicists Paintings',
        renderer: 'category',
        path: Routes.wishlist,
    }
];

const ArtCategory = () => {
    const [value, setValue] = useState('');
    const Renderer = LinkViewMap[value];
    return (
        <Grid container spacing={0} className='m-1'>
            <Grid item sm={3} md={3} lg={3}>
                {
                    Categories.map(item => (
                        <Grid item sx={{ padding: '10px 0' }} key={item.id}>
                            <Link href={item.path}
                                className={styles.category_links}
                                onMouseOver={(e) => {
                                    e.stopPropagation();
                                    setValue(item.id)
                                }}>
                                {item.title}
                                <ArrowForwardIosIcon className={styles.icon_arrow} />
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid item sm={9} md={9} lg={9} >
                <Grid container spacing={2} className={styles.category_container}>
                    {
                        Renderer ? <Renderer /> : <CardComponent />
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ArtCategory;