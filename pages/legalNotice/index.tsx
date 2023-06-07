import { Container, Typography } from '@mui/material';
import React from 'react';
import styles from "./LegalNotice.module.css";

const LegalNotice = () => {
    return (
        <Container className='mb-2 mt-2'>
            <Typography className={styles.title}>Legal Notice</Typography>
            <Typography className={styles.subTitle}>Concept and production:</Typography>
            <Typography className={styles.subTitle}>
                This Online store was created using Shopify Online Store, check out Shopify Official Documentations and blogs for news and advices about selling online and running your ecommerce website.
            </Typography>
        </Container>)
}

export default LegalNotice;