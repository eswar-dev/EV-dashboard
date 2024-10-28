import {
  AppBar,
  IconButton,
  Typography,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Grid from "@mui/material/Grid2";
export default function Navbar({ closeMenu }: any) {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar sx={{ background: " #44A3FF1A", boxShadow: "none" }}>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        ml={closeMenu ? "80px" : "290px"}
      >
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ color: "#050D15", fontSize: "26px", fontWeight: 600 }}
        >
          Dashboard
        </Grid>
        <Grid
          container
          display={"flex"}
          justifyContent={"end"}
          gap={"20px"}
          m={1}
          pr={2}
        >
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon style={{ color: "black" }} />
            </Badge>
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../../src/assets/profile.svg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Grid display={"flex"} flexDirection={"column"}>
            <Typography sx={{ color: "#050D15" }}>username</Typography>
            <Typography sx={{ color: "#050D15" }}>
              useremail@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
