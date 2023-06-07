import React from "react";
import Drawer from "@mui/material/Drawer";
import styles from "./CommonDrawer.module.css";
import { DrawerViewMap } from "./DrawerUtils";

type DrawerProps = {
  toggle: boolean;
  handleChange: () => void;
  view: string;
  anchor?: "right" | "left" | "top" | "bottom";
};

const CommonDrawer = ({
  toggle,
  handleChange,
  view,
  anchor = "right",
}: DrawerProps) => {
  const Renderer = DrawerViewMap[view];
  return (
    <Drawer
      anchor={anchor}
      open={toggle}
      onClose={handleChange}
      className={styles.drawer}
      PaperProps={{
        sx: {
          width: {
            xs: "auto",
            sm: 350,
          },
        },
      }}
    >
      <Renderer handleClose={handleChange} />
    </Drawer>
  );
};

export default CommonDrawer;
