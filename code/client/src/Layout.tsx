import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router";

export const Layout = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        sx={{ cursor: "pointer" }}
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={() => navigate("/")}>
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
    );
};
