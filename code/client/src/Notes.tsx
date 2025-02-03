import { Box, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNotes } from "./hooks/useNotes";

export const Notes = ({ userId }: { userId: string }) => {
    const [note, setNote] = useState("");
    const { notes, saveNote } = useNotes(userId);

    return (
        <Box mt={2}>
            <TextField
                fullWidth
                multiline
                label="Add a Note (Shift+Enter to save)"
                value={note}
                onChange={e => setNote(e.target.value)}
                onKeyDown={async e => {
                    if (e.shiftKey && e.key === "Enter") {
                        e.preventDefault();
                        await saveNote(note);
                        setNote("");
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
