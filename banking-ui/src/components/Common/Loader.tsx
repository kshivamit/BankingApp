import { Box, CircularProgress, Typography } from "@mui/material";

interface LoaderProps {
  message?: string;
  size?: number;
  fullPage?: boolean;
}

function Loader({ message = "Loading...", size = 50, fullPage = false }: LoaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        minHeight: fullPage ? "100vh" : 400,
        width: "100%",
      }}
    >
      <CircularProgress
        size={size}
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      />
      {message && (
        <Typography variant="body2" sx={{ color: "#666" }}>
          {message}
        </Typography>
      )}
    </Box>
  );
}

export default Loader;
