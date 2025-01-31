import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    CircularProgress,
    Grid2,
} from "@mui/material";
import { useParams } from "react-router";
import { useEditableUser } from "./hooks/useEditableUser";

const UserPage = () => {
    const { id } = useParams();
    const {
        loading,
        user,
        isEditing,
        handleChange,
        handleSave,
        handleCancel,
        handleStartEditing,
    } = useEditableUser(id!);

    if (loading) {
        return <CircularProgress sx={{ display: "block", margin: "auto", mt: 4 }} />;
    }

    if (!user) {
        return (
            <Typography variant="h6" color="error" textAlign="center">
                User not found
            </Typography>
        );
    }

    return (
        <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                User Profile
            </Typography>

            <Grid2 container spacing={2}>
                <Grid2 size={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </Grid2>
                <Grid2 size={6}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </Grid2>
                <Grid2 size={6}>
                    <TextField
                        fullWidth
                        label="Age"
                        name="age"
                        type="number"
                        value={user.age}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </Grid2>
                <Grid2 size={6}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                    />
                </Grid2>
                <Grid2 size={12}>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Notes"
                        name="notes"
                        value={user.notes}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </Grid2>
            </Grid2>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                {isEditing ? (
                    <>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleSave}
                            disabled={
                                !user.firstName ||
                                !user.lastName ||
                                !user.age ||
                                !user.phoneNumber
                            }>
                            Save
                        </Button>
                        <Button variant="outlined" color="error" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleStartEditing}>
                        Edit
                    </Button>
                )}
            </Box>
        </Paper>
    );
};

export default UserPage;
