import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import "./MainLayout.css"; // Import the CSS file
import { Outlet ,useNavigate} from "react-router-dom";
export default function MainLayout() {
  const [closeMenu, setCloseMenu] = React.useState(false);
  const navigate = useNavigate()
  const handleDrawerToggle = () => {
    setCloseMenu(!closeMenu);
  };

  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const handleListItemClick = (index: number,item:any) => {
    setSelectedIndex(index);
    navigate(item.path)
    
  };

  return (
    <Box className="main-layout-root">
      <Box className="sidebar-container">
        <Sidebar
          {...{
            handleListItemClick,
            selectedIndex,
            handleDrawerToggle,
            closeMenu,
          }}
        />
      </Box>

      <Box className="navbar-container">
        <Navbar {...{ closeMenu }} />
      </Box>
        <Box className="content-container" sx={{
        marginLeft: closeMenu ? '60px' : '270px'
      }}>
        <Outlet />
      </Box>
    </Box>
  );
}
