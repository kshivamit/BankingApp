import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  Container,
  Button,
  TextField,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SavingsIcon from "@mui/icons-material/Savings";

interface Account {
  accountId: number;
  customerId: number;
  accountNumber: string;
  accountType: string;
  balance: number;
  status: "active" | "inactive" | "frozen";
  createdDate: string;
}

function AccountListPage() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    // Mock data - Replace with actual API call
    const mockAccounts: Account[] = [
      {
        accountId: 1,
        customerId: 1,
        accountNumber: "1234567890",
        accountType: "Savings",
        balance: 50000,
        status: "active",
        createdDate: "2024-01-15",
      },
      {
        accountId: 2,
        customerId: 2,
        accountNumber: "0987654321",
        accountType: "Checking",
        balance: 125000,
        status: "active",
        createdDate: "2024-02-10",
      },
      {
        accountId: 3,
        customerId: 3,
        accountNumber: "5555666677",
        accountType: "Business",
        balance: 500000,
        status: "active",
        createdDate: "2024-03-05",
      },
    ];
    setAccounts(mockAccounts);
  };

  const getAccountIcon = (type: string) => {
    switch (type) {
      case "Savings":
        return <SavingsIcon />;
      case "Checking":
        return <CreditCardIcon />;
      case "Business":
        return <AccountBalanceIcon />;
      default:
        return <AccountBalanceIcon />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "success";
      case "inactive":
        return "warning";
      case "frozen":
        return "error";
      default:
        return "default";
    }
  };

  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch =
      account.accountNumber.includes(searchTerm) ||
      account.accountType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = !filterType || account.accountType === filterType;

    return matchesSearch && matchesFilter;
  });

  const accountTypes = Array.from(new Set(accounts.map((a) => a.accountType)));

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      {/* Header Section */}
      <Box sx={{ marginBottom: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 1 }}>
            Accounts Management
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            Manage and monitor all customer accounts
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
          Create Account
        </Button>
      </Box>

      {/* Search and Filter */}
      <Box sx={{ marginBottom: 3, display: "flex", gap: 2, flexDirection: "column" }}>
        <TextField
          fullWidth
          placeholder="Search by account number or type..."
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

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip
            label="All"
            onClick={() => setFilterType(null)}
            variant={filterType === null ? "filled" : "outlined"}
            color={filterType === null ? "primary" : "default"}
          />
          {accountTypes.map((type) => (
            <Chip
              key={type}
              label={type}
              onClick={() => setFilterType(type)}
              variant={filterType === type ? "filled" : "outlined"}
              color={filterType === type ? "primary" : "default"}
            />
          ))}
        </Box>
      </Box>

      {/* Accounts Grid */}
      <Grid container spacing={3}>
        {filteredAccounts.map((account) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={account.accountId}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                overflow: "hidden",
                border: "1px solid #e0e0e0",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  padding: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {account.accountType}
                </Typography>
                <Box sx={{ fontSize: "28px" }}>{getAccountIcon(account.accountType)}</Box>
              </Box>

              <Box sx={{ padding: "20px" }}>
                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    Account Number
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {account.accountNumber}
                  </Typography>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    Balance
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#667eea" }}>
                    ₹{account.balance.toLocaleString()}
                  </Typography>
                </Box>

                <Box sx={{ marginBottom: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    Status
                  </Typography>
                  <Chip
                    label={account.status}
                    size="small"
                    color={getStatusColor(account.status)}
                    variant="filled"
                  />
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant="caption" sx={{ color: "#666" }}>
                    Created Date
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {new Date(account.createdDate).toLocaleDateString()}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Edit
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredAccounts.length === 0 && (
        <Box sx={{ textAlign: "center", paddingY: 4 }}>
          <Typography variant="body1" sx={{ color: "#999" }}>
            No accounts found. Try adjusting your search criteria.
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default AccountListPage;
