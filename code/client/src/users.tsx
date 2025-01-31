import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useUserList } from "./hooks/useUserList";
import { useNavigate } from "react-router";

export const Users: React.FC = () => {
    const users = useUserList();
    const navigate = useNavigate();    
    return (
        <TableContainer component={Paper}>
            <Typography variant="h5" sx={{ m: 2, fontWeight: "bold" }}>Users</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight: 'bold'}}>First Name</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Last Name</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Age</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Phone Number</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>{user.phoneNumber}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained" 
                                    color="primary"
                                    size="small"
                                    onClick={() => navigate(`/users/${user.id}`)}
                                >View Profile</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
