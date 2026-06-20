import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Hero() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        paddingY: 8,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Content */}
        <Box sx={{ marginBottom: 8, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              marginBottom: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            Welcome to the Banking Application
          </Typography>

          <Typography
            variant="h5"
            sx={{
              marginBottom: 4,
              opacity: 0.95,
              fontWeight: 300,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Secure, Reliable, and Modern Banking Services at Your Fingertips
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "white",
                color: "#667eea",
                fontWeight: 700,
                paddingX: 4,
                paddingY: 1.5,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "white",
                color: "white",
                fontWeight: 700,
                paddingX: 4,
                paddingY: 1.5,
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Grid container spacing={3} sx={{ marginTop: 4 }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                textAlign: "center",
                padding: 3,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Box sx={{ fontSize: "3rem", marginBottom: 2 }}>
                <SecurityIcon sx={{ fontSize: "inherit" }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 1 }}>
                Bank-Grade Security
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Your data is protected with industry-leading encryption and security protocols.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                textAlign: "center",
                padding: 3,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Box sx={{ fontSize: "3rem", marginBottom: 2 }}>
                <SpeedIcon sx={{ fontSize: "inherit" }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 1 }}>
                Lightning Fast
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Process transactions and manage accounts with blazing-fast performance.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                textAlign: "center",
                padding: 3,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Box sx={{ fontSize: "3rem", marginBottom: 2 }}>
                <EmojiEventsIcon sx={{ fontSize: "inherit" }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 1 }}>
                Award Winning
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Trusted by millions of users worldwide with excellent ratings.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;

