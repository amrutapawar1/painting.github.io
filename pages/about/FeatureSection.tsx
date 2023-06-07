import React, { FC, ReactElement } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import styles from "./About.module.css";
import Img_1 from "../../components/HomePage/images/category1.png";
import Img_2 from "../../components/HomePage/images/category2.png";
import Img_3 from "../../components/HomePage/images/category3.png";
import Image from "next/image";

const FeatureSection: FC = (): ReactElement => {
  return (
    <Grid container spacing={2} className="mt-2">
      <Grid item xs={12} sm={12} md={6} lg={6} className="ta-e mt-3">
        <Typography className={styles.quote_symbol}>“</Typography>
        <Typography className={styles.feature_img_info}>Class aptent taciti sociosqu ad litora per<br />himenas. Sed nisl ex, condimentum ante quis<br />Curabitur ac aliquet in suscipit.</Typography>
        <Image src={Img_1} className={styles.feature_img} height={500} alt='feature_img' />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} >
        <Box className={styles.provider_container}><Typography className={styles.feature_title}>We provide solution for your business</Typography>
          <Typography className={styles.feature_subtitle}>Suspendisse finibus orci id sapien auctor, vel tristique ex  dictum. Maecenas arcu eros, bibendum sit amet massa ut  pellentesque pharetra massa. Proin nisl magna, ultricies vitae auctor id, tempus in augue. Donec volutpat, ex in feugiat vehicula. <br /><br />Leo nisi ornare eros, iaculis tempor tortor urna eget sem. Ut a diam eu est egestas iaculis eu non mauris. Praesent sit amet ipsum at mauris consequat molestie. Donec a sollicitudin tellus. Donec justo enim, vehicula a aliquam viverra, fringilla fringilla ante.<br /><br />Quisque tincidunt purus odio, nec pellentesque ligula vehicula at. Proin sagittis purus sit amet felis lobortis scelerisque. Maecenas vitae accumsan ex. Paesent ut consectetur neque. Praesent tempor, augue ac tempus finibus, enim felis venenatis urna...</Typography>
          <Button className={styles.feature_btn} variant="outlined">READ MORE</Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} sx={{ position: "relative" }}>
        <Image src={Img_2} alt='feature_img_2' className={styles.feature_img_2} />
        <Typography className={styles.feature_text}>Class aptent taciti sociosqu ad litora torquent per conubia<br /> nostra, per inceptos himenaeos. Sed nisl ex, condimentum<br /> tristique ante quis, pellentesque vehicula lacus. Curabitur ac<br /> aliquet est, in suscipit...</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Image src={Img_3} height={500} alt='feature_img_3' style={{width:"100%"}} />
      </Grid>
    </Grid>
  );
};
export default FeatureSection;