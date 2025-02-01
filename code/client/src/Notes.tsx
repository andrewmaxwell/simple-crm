import { Box, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNotes } from "./hooks/useNotes";

export const Notes = ({ userId }: { userId: string }) => {
    const [note, setNote] = useState("");
    const { notes, loadNotes } = useNotes(userId);

    const save = async () => {
        const response = await fetch(`/api/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: note, userId }),
        });
        if (response.ok) {
            setNote("");
            loadNotes();
        }
    };

    return (
        <Box mt={2}>
            <TextField
                fullWidth
                multiline
                label="Add a Note (Shift+Enter to save)"
                value={note}
                onChange={e => setNote(e.target.value)}
                onKeyDown={e => {
                    if (e.shiftKey && e.key === "Enter") {
                        e.preventDefault();
                        save();
                    }
                }}
            />
            {notes?.map(note => (
                <Paper key={note.id} sx={{ mt: 1, p: 2 }}>
                    <Typography variant="caption">
                        {new Date(note.timestamp).toLocaleString()}
                    </Typography>
                    <Typography variant="body1">{note.text}</Typography>
                </Paper>
            ))}
        </Box>
    );
};
