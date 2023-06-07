import React from 'react';
import { Box } from '@mui/material';
import styles from './Header.module.css';
import { Routes } from '../../../routes/pageRoutes';
import DropdownLink from './DropdownLinks';
import ArtCategory from '../../ArtCategory';
import PaintingCategory from '../../ArtCategory/PaintingCategory';
import DrawingCategory from '../../ArtCategory/DrawingCategory';

const HeaderDesktopView = ({ authStatus }: any) => {
    return (
        <Box className={styles.box2}>
            <a href={Routes.home}>
                <img
                    src="/Logo.png"
                    alt="logo-image"
                    className={styles.logoStyling}
                />
            </a>
            <DropdownLink
                title={'Category'}
                id={'home'}
                href={Routes.home}
                className={styles.menuItem}
            >
                <ArtCategory />
            </DropdownLink>
            <DropdownLink
                title={'Painting'}
                id={'home'}
                href={Routes.home}
                className={styles.menuItem}
            >
                <PaintingCategory />
            </DropdownLink>
            <DropdownLink
                title={'Drawing'}
                id={'home'}
                href={Routes.home}
                className={styles.menuItem}
            >
                <DrawingCategory />
            </DropdownLink>
        </Box>
    )
}

export default HeaderDesktopView;