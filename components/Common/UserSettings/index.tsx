import React, { FC, ReactElement, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAuthenticator } from "@aws-amplify/ui-react";

const UserSettings: FC = (): ReactElement => {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const MenuItems = [
    { id: 1, title: "Profile", onclick: `${signOut}` },
    { id: 2, title: "My account", onclick: `${signOut}` },
    { id: 3, title: "logout", onclick: `${signOut}` },
  ];

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenUserMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={signOut}>signOut</MenuItem>
        {MenuItems.map((items, index) => (
          <>
            <MenuItem key={index} onClick={handleCloseUserMenu}>
              {items.title}
            </MenuItem>
          </>
        ))}
      </Menu>
    </div>
  );
};

export default UserSettings;
