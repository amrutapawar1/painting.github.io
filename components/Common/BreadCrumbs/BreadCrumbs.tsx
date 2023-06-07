import React from 'react';
import { Link, Breadcrumbs, Typography } from '@mui/material';
import styles from './BreadCrumbs.module.css';

type Props = {
    title: string;
}
const BreadCrumbs = ({ title }: Props) => {

    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb" className={styles.section1}>
            <Link underline="hover" color="inherit" href="/" className={styles.link}>
                Home
            </Link>
            <Typography className={styles.link}>{title}</Typography>
        </Breadcrumbs>
    )
}
export default BreadCrumbs;