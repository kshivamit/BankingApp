import Header from "../components/Common/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Common/Sidebar";

function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;