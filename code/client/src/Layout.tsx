import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router";

export default () => (
  <Box>
    <CssBaseline />
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Simple CRM
        </Typography>
      </Toolbar>
    </AppBar>

    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Container>
          <Outlet />
        </Container>
      </Box>
  </Box>
)