import { useEffect, useState } from "react";
import { getCustomers } from "../services/customerService";
import {
  Container,
  Box,
  Card,
  Typography,
  CircularProgress,
  Button,
  TextField,
} from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";

function CustomerListPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      setLoading(true);
      const data = await getCustomers();
      setCustomers(data || []);
    } catch (error) {
      console.error("Error loading customers:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "customerId",
      headerName: "Customer ID",
      flex: 1,
      minWidth: 100,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1.5,
      minWidth: 150,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      minWidth: 180,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      minWidth: 130,
      headerAlign: "left",
      align: "left",
    },
  ];

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone?.includes(searchTerm) ||
      customer.customerId?.toString().includes(searchTerm)
  );

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      {/* Header Section */}
      <Box sx={{ marginBottom: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 1 }}>
            Customers Management
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            View and manage all your banking customers
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            textTransform: "none",
            fontWeight: 600,
            paddingX: 3,
          }}
        >
          Add Customer
        </Button>
      </Box>

      {/* Search Bar */}
      <Box sx={{ marginBottom: 3 }}>
        <TextField
          fullWidth
          placeholder="Search customers by name, email, phone, or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#f8f9fa",
              "& fieldset": {
                borderColor: "#e0e0e0",
              },
              "&:hover fieldset": {
                borderColor: "#667eea",
              },
            },
          }}
        />
      </Box>

      {/* Data Grid */}
      <Card
        sx={{
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400 }}>
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={filteredCustomers.map((customer) => ({
              id: customer.customerId,
              ...customer,
            }))}
            columns={columns}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                  page: 0,
                },
              },
            }}
            sx={{
              border: "none",
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: 700,
              },
              "& .MuiDataGrid-row": {
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              },
            }}
          />
        )}
      </Card>

      {/* No Results Message */}
      {!loading && filteredCustomers.length === 0 && (
        <Box sx={{ textAlign: "center", paddingY: 4 }}>
          <Typography variant="body1" sx={{ color: "#999" }}>
            No customers found. Try adjusting your search criteria.
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default CustomerListPage;