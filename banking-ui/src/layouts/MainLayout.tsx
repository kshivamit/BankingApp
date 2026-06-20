import Header from "../components/Common/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Common/Sidebar";
import Footer from "../components/Common/Footer";
import { Box } from "@mui/material";

function MainLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header />
          <Box sx={{ flex: 1, backgroundColor: "#f8f9fa" }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;