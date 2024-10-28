import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Grid2, Icon } from "@mui/material";
import EvLogo from "../../../src/assets/evlogo.svg";
import ToggleSvg from "../../../src/assets/toggleBar.svg";
import ExpandSvg from "../../../src/assets/expand.svg";
import { MenuItems } from "../../constants/menuConfig";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

export default function Sidebar({
  handleListItemClick,
  selectedIndex,
  handleDrawerToggle,
  closeMenu,
}: any) {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: `drawer-paper ${
          closeMenu ? "drawer-paper-collapsed" : ""
        } drawer-scrollbar`,
      }}
      open
    >
      <div>
        <Grid2 pt={2} pl={1.5}>
          <img src={EvLogo} alt="" />
        </Grid2>
        <Grid2
          display={"flex"}
          justifyContent={"end"}
          className="cursor-pointer"
          onClick={handleDrawerToggle}
          // sx={{position:'relative',left:'1rem',zIndex:1300 }}
        >
          {closeMenu ? (
            <img src={ExpandSvg} alt="" />
          ) : (
            <img src={ToggleSvg} alt="" />
          )}
        </Grid2>
        <List sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {MenuItems.map((item, index) => (
            <ListItem key={item.name} disablePadding>
              
              <ListItemButton
                className={`list-item-button ${
                  selectedIndex === index ? "list-item-button-selected" : ""
                }`}
                onClick={() => handleListItemClick(index,item)}
                title={item.name}
              >
                <Icon
                  component={item.icon}
                  className={selectedIndex === index ? "icon-selected" : ""}
                />
                <ListItemText
                  primary={item.name}
                  className={
                    selectedIndex === index ? "text-selected" : "text-default"
                  }
                />
              </ListItemButton>
          
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
