import React from "react";
import { CurrencyExchange as CurrencyExchangeIcon, Lock as LockIcon, KeyboardReturn as KeyboardReturnIcon, LocalShipping as LocalShippingIcon } from "@mui/icons-material";
import { Typography, Icon, Grid } from "@mui/material";
import styles from "./ShippingSection.module.css";

const ShippingSection = () => {
  return (
    <Grid container spacing={0} className={styles.shippingGrid}>
      {ShippingData.map((item) => (
        <Grid key={item.id} item xs={12} lg={3} sm={6} md={3} className={styles.iconStyle}>
          <Icon className={styles.shippingIcon}>{item.icon}</Icon>
          <Typography className={styles.shippingText}>{item.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default ShippingSection;

const ShippingData = [
  {
    id: 1,
    icon: <LocalShippingIcon style={{ transform: 'scaleX(-1)' }} />,
    title: "WE SHIPPING WORLDWIDE",
  },

  {
    id: 2,
    icon: <CurrencyExchangeIcon />,
    title: "100% MONEY BACK GUARANTEE",
  },

  {
    id: 3,
    icon: <LockIcon />,
    title: "100% SECURED PAYMENT",
  },
  {
    id: 4,
    icon: <KeyboardReturnIcon />,
    title: "100% RETURN POLICY",
  },
];
