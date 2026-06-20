import { Link, useLocation } from "react-router-dom";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";

function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: DashboardIcon },
    { label: "Customers", path: "/customers", icon: PeopleIcon },
    { label: "Accounts", path: "/accounts", icon: CreditCardIcon },
  ];

  return (
    <Box
      sx={{
        width: 260,
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        padding: "20px 0",
        boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ padding: "20px 15px", marginBottom: "30px" }}>
        <Typography variant="h5" sx={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 1 }}>
          <AccountBalanceIcon sx={{ fontSize: 28 }} />
          BankApp
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.8 }}>
          Management System
        </Typography>
      </Box>

      <List>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                margin: "8px 12px",
                borderRadius: "8px",
                backgroundColor: isActive(item.path) ? "rgba(255,255,255,0.2)" : "transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transform: "translateX(5px)",
                },
              }}
            >
              <ListItemIcon sx={{ color: isActive(item.path) ? "#ffd700" : "white", minWidth: 40 }}>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}

export default Sidebar;