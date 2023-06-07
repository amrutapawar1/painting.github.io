import React, { FC, ReactElement } from "react";
import { Typography, Grid, TextField, InputAdornment } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./About.module.css";

const NewsletterSignUp: FC = (): ReactElement => {
  return (
    <Grid container spacing={0} className={styles.signupContainer} >
      <Grid item xs={12} sm={6} md={6} lg={6} className={styles.signup} >
        <Typography className={styles.signupText}> Sign Up for the <br /> Latest News, Trends <br /> & Exclusive Offers!</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} className={styles.mailContainer}>
        <Typography className={styles.mailStyling}>
          SIGN UP FOR EMAILS
        </Typography>
        <TextField
          type="email"
          name="email"
          placeholder="Email address"
          className={styles.mailBoxStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ArrowForwardIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};
export default NewsletterSignUp;