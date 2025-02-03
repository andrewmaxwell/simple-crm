import { useEffect, useState } from "react";
import { Note } from "../types";

export const useNotes = (userId: string) => {
    const [notes, setNotes] = useState<Note[]>();

    const loadNotes = async () => {
        const response = await fetch(`/api/users/${userId}/notes`);
        setNotes(await response.json());
    };

    const saveNote = async (note: string) => {
        await fetch(`/api/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: note, userId }),
        });
        loadNotes();
    };

    useEffect(() => {
        loadNotes();
    }, [userId]);

    return { notes, saveNote };
};
