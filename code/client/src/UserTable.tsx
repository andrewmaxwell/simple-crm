import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useUserList } from "./hooks/useUserList";
import { useNavigate } from "react-router";

const bold = { fontWeight: "bold" };

export const UserTable: React.FC = () => {
    const users = useUserList();
    const navigate = useNavigate();
    return (
        <TableContainer component={Paper}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Users
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/users/new")}>
                    Add User
                </Button>
            </Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={bold}>First Name</TableCell>
                        <TableCell sx={bold}>Last Name</TableCell>
                        <TableCell sx={bold}>Age</TableCell>
                        <TableCell sx={bold}>Phone Number</TableCell>
                        <TableCell sx={bold}>Notes</TableCell>
                        <TableCell sx={bold}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>{user.phoneNumber}</TableCell>
                            <TableCell>{user.notes}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => navigate(`/users/${user.id}`)}>
                                    View Profile
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
