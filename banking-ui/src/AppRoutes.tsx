import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import CustomerListPage from "./pages/CustomerListPage";
import AccountListPage from "./pages/AccountList";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/customers"
            element={<CustomerListPage />}
          />

          <Route
            path="/accounts"
            element={<AccountListPage />}
          />

          <Route
            path="/"
            element={<Navigate to="/dashboard" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;