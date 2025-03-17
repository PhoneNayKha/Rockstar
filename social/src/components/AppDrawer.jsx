import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useApp } from "../AppProvider";

import { useNavigate } from "react-router";

export default function AppDrawer() {
  const { openDrawer, setOpenDrawer, user, setUser } = useApp();
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
      <Box sx={{ width: 300 }} onClick={toggleDrawer}>
        <Box sx={{ height: 200, background: "grey" }}>
          {user && <Typography>{user.name}</Typography>}
        </Box>
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {!user && (
            <>
              <ListItem>
                <ListItemButton onClick={() => navigate("/login")}>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={() => navigate("/register")}>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </>
          )}

          {user && (
            <ListItem>
              <ListItemButton onClick={() => navigate("/profile")}>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          )}
          {user && (
            <ListItem>
              <ListItemButton onClick={handleLogout}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    </Drawer>
  );
}
