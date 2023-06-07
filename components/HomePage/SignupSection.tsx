import React from "react";
import { Typography, Grid, Divider, InputAdornment, TextField, } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from './Homepage.module.css';

const SignupSection = () => {
  return (
    <Grid container spacing={3} className={styles.signupContainer} >
      <Grid item xs={12} sm={5} md={5} lg={5} sx={{ textAlign: "end" }}>
        <Typography className={styles.signupText}><b>sign up for </b><br /> Venedor&apos;s latest <br />news & offers! </Typography>
      </Grid>
      <Grid item xs={0} sm={2} md={2} lg={2} sx={{ borderColor: "var(--white)", borderBottomWidth: "1px" }}>
        <Divider orientation="vertical" variant="middle" flexItem className={styles.signupDivider} />
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={5} className={styles.mailConatiner}>
        <Typography className={styles.mailStyling}>
          JOIN OUR MAILING LIST
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

export default SignupSection;