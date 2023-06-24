import AccountCircle from "@mui/icons-material/AccountCircle";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { logoutEv } from "auth/model";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "styles/colors";

const UserAvatar = () => {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRecords = () => {
    navigate('/records');
  };

  const handleLogout = () => {
    navigate('/auth');
    logoutEv();
  }
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar
            sx={{ bgcolor: '#86c232',  width: 24, height: 24}} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem sx={{ color: colors['primary-text'], fontSize: '0.9rem'}} onClick={handleClose}>Профиль</MenuItem>
        <MenuItem sx={{ color: colors['primary-text'], fontSize: '0.9rem'}} onClick={handleRecords}>Мои записи</MenuItem>
        <MenuItem sx={{ color: colors['primary-text'], fontSize: '0.9rem'}} onClick={() => handleLogout()}>Выход</MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
