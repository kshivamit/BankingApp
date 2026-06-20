import { AppBar, Toolbar, Typography, Box, Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 4px 20px 0 rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
          💼 Banking Management System
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon sx={{ cursor: "pointer" }} />
          </Badge>

          <Avatar
            sx={{ cursor: "pointer", bgcolor: "#00796b" }}
            onClick={handleMenuOpen}
          >
            AD
          </Avatar>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;