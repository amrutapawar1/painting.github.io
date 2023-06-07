import React, { FC, ReactElement } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { Lock as LockIcon, LocalShipping as LocalShippingIcon, KeyboardReturn as KeyboardReturnIcon, SupportAgent as SupportAgentIcon } from "@mui/icons-material";
import styles from "./About.module.css";

const WhatWeDoSection: FC = (): ReactElement => {
  return (
    <Grid container spacing={2} className="p-2">
      <Grid item xs={12} sm={12} lg={6} md={6}>
        <Typography className={styles.what_we_do_title1}>
          Who we are ?
        </Typography>
        <Typography className={styles.what_we_do_description1}>
          Maecenas arcu eros, bibendum sit amet massa ut, pellentesqu
          pharetra massa. Proin nisl magna, ultricies vitae auctor id,
          tempus
          in augue. Donec volutpat, ex in feugiat vehicula, leo nisi
          ornare
          eros, iaculis tempor tortor urna eget sem. Ut a diam eu est{" "}
          egestas. <br /> <br />
          Eaculis eu non mauris.
          Praesent sit amet ipsum at mauris consequat molestie. Donec
          asollicitudin tellus. Donec justo enim,
          vehicula a aliquamviverra, fringilla fringilla ante. Quisque
          tincidunt purus odio, nec pellentesque ligula vehicula at.
          Proin sagittis purus sit amet felis lobortis scelerisque.
          <br />
          <br />
          Maecenas vitae accumsan ex. Praesent ut consectetur neque.
          Praesent tempor, augue ac tempus finibus, enim felis
          venenatis urna, vitae commodo nunc velit iaculis elit. Nulla
          in elit non quam sollicitudin ultricies in quis metus.
          Curabitur tincidunt condi eget nibh.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} lg={6} md={6}>
        <Typography className={styles.what_we_do_title1}>
          What we do
        </Typography>
        {
          Data.map((item) => (
            <Box key={item.id} className={styles.what_we_do_section2}>
              <div>
                <Typography className={styles.what_we_do_icon}>{item.icon}</Typography>
              </div>
              <div>
                <Typography className={styles.what_we_do_title}>
                  {item.title}
                </Typography>
                <Typography className={styles.what_we_do_description2}>
                  {item.description}
                </Typography>
              </div>
            </Box>
          ))}
      </Grid>
    </Grid>
  );
};

export default WhatWeDoSection;

const Data = [
  {
    id: 1,
    icon: <LockIcon />,
    title: "PAYMENT SECURED",
    description:
      "In ncec erat elementum, et venenatis purus nec. Aenean hendrerit . ",
  },
  {
    id: 2,
    title: "FREE DELIVERY",
    icon: <LocalShippingIcon />,
    description:
      "Praesent viverra lorem eu enim imperdiet dapibus. Duis eget feugiat.",
  },
  {
    id: 3,
    title: "30 - DAY RETURNS",
    icon: <KeyboardReturnIcon />,
    description:
      "In ncec erat elementum, et venenatis purus nec. Aenean hendrerit . ",
  },
  {
    id: 4,
    title: "24/H SUPPORT",
    icon: <SupportAgentIcon />,
    description:
      "Praesent viverra lorem eu enim imperdiet dapibus. Duis eget feugiat.",
  },
];
