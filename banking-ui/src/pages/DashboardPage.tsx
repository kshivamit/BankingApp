import { Grid, Card, CardContent, Typography, Box, Container, LinearProgress } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function DashboardPage() {
  const stats = [
    {
      title: "Total Customers",
      value: "125",
      icon: PeopleIcon,
      color: "#667eea",
      bgColor: "#f0f4ff",
      growth: "+12%",
    },
    {
      title: "Active Accounts",
      value: "245",
      icon: AccountBalanceWalletIcon,
      color: "#764ba2",
      bgColor: "#f8f4ff",
      growth: "+8%",
    },
    {
      title: "Total Transactions",
      value: "589",
      icon: CompareArrowsIcon,
      color: "#f093fb",
      bgColor: "#fff4f8",
      growth: "+23%",
    },
    {
      title: "Total Balance",
      value: "₹2.5 Cr",
      icon: TrendingUpIcon,
      color: "#4facfe",
      bgColor: "#f0f9ff",
      growth: "+5%",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      {/* Header Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>
          Welcome back! Here's your banking overview.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  backgroundColor: stat.bgColor,
                  border: "1px solid transparent",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box>
                      <Typography variant="body2" sx={{ color: "#666", marginBottom: 1, fontWeight: 500 }}>
                        {stat.title}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: "#000", marginBottom: 1 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: stat.color, fontWeight: 600 }}>
                        {stat.growth} from last month
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "10px",
                        backgroundColor: stat.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon sx={{ color: "white", fontSize: 28 }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Performance Section */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card
            sx={{
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 3 }}>
                System Performance
              </Typography>

              <Box sx={{ marginBottom: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Server Performance
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#667eea", fontWeight: 600 }}>
                    95%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={95}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#f0f0f0",
                    "& .MuiLinearProgress-bar": {
                      background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                    },
                  }}
                />
              </Box>

              <Box sx={{ marginBottom: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    API Response Time
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#764ba2", fontWeight: 600 }}>
                    88%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={88}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#f0f0f0",
                    "& .MuiLinearProgress-bar": {
                      background: "linear-gradient(90deg, #764ba2 0%, #f093fb 100%)",
                    },
                  }}
                />
              </Box>

              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Database Availability
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4facfe", fontWeight: 600 }}>
                    99.9%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={99.9}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#f0f0f0",
                    "& .MuiLinearProgress-bar": {
                      background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card
            sx={{
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
                Quick Stats
              </Typography>

              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Monthly Revenue
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  ₹45.2 L
                </Typography>
              </Box>

              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Pending Transactions
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  23
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  System Uptime
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  99.99%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardPage;