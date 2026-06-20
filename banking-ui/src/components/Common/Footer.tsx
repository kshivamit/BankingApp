import { Box, Container, Typography, Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        marginTop: "60px",
        paddingY: "40px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Providing secure and reliable banking solutions for modern businesses.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" color="inherit" sx={{ opacity: 0.8, textDecoration: "none", "&:hover": { opacity: 1 } }}>
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" sx={{ opacity: 0.8, textDecoration: "none", "&:hover": { opacity: 1 } }}>
                Terms of Service
              </Link>
              <Link href="#" color="inherit" sx={{ opacity: 0.8, textDecoration: "none", "&:hover": { opacity: 1 } }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
              Support
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Email: support@bankapp.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Phone: +1 (800) 123-4567
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <FacebookIcon sx={{ cursor: "pointer", "&:hover": { opacity: 0.7 } }} />
              <TwitterIcon sx={{ cursor: "pointer", "&:hover": { opacity: 0.7 } }} />
              <LinkedInIcon sx={{ cursor: "pointer", "&:hover": { opacity: 0.7 } }} />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.2)", marginTop: 3, paddingTop: 3, textAlign: "center" }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2026 Banking Application. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;