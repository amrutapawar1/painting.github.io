import { Container, Typography } from '@mui/material';
import React from 'react';
import styles from "./delivery.module.css";

const LegalNotice = () => {
    return (
        <Container className='mb-2 mt-2'>
            <Typography className={styles.title}>Delivery</Typography>
            <Typography className={styles.subTitle}>Shipments and returns</Typography>
            <Typography className={styles.subTitle}>
                Packages are generally dispatched within 2 days after receipt of payment and are shipped via UPS with tracking and drop-off without signature. If you prefer delivery by UPS Extra with required signature, an additional cost will be applied, so please contact us before choosing this method. Whichever shipment choice you make, we will provide you with a link to track your package online.
                <br />
                <br />
                Shipping fees include handling and packing fees as well as postage costs. Handling fees are fixed, whereas transport fees vary according to total weight of the shipment. We advise you to group your items in one order. We cannot group two distinct orders placed separately, and shipping fees will apply to each of them. Your package will be dispatched at your own risk, but special care is taken to protect fragile objects.
                <br />
                <br />
                Boxes are amply sized and your items are well-protected.
            </Typography>
        </Container>)
}

export default LegalNotice;