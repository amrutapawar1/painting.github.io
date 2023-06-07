import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { FC, useState } from "react";
import styles from "./Profile.module.css";
import { Routes } from "../../../routes/pageRoutes";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const ProfileDropdown:FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} className="c-b">
        <PersonOutlinedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          onMouseLeave: () => {
            setAnchorEl(null);
          },
        }}
      >
        <Container className={styles.boxStyling}>
          <Typography className={styles.title}>Welcome</Typography>
          <Typography className={styles.subTitle}>
            To access account and manage orders
          </Typography>
          <Button variant="outlined" className={styles.btn} href={Routes.login}>
            LOGIN / SIGNUP
          </Button>
          <Divider />
          <Box className={styles.linkBox}>
            {data.map((item) => (
              <Box key={item.id}>
                <Link href={item.link} className={styles.subTitle}>
                  {item.title}
                </Link>
              </Box>
            ))}
          </Box>
        </Container>
      </Menu>
    </>
  );
};

export default ProfileDropdown;

const data = [
  {
    id: "1",
    title: "Order",
    link: "",
  },
  {
    id: "2",
    title: "Wishlist",
    link: Routes.wishlist,
  },
  {
    id: "3",
    title: "Gift Card",
    link: "",
  },
  {
    id: "4",
    title: "Contact Us",
    link: Routes.contact,
  },
];
