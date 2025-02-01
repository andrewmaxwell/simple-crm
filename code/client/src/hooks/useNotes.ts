import { useEffect, useState } from "react";
import { Note } from "../types";

export const useNotes = (userId: string) => {
    const [notes, setNotes] = useState<Note[]>();

    const loadNotes = async () => {
        const response = await fetch(`/api/users/${userId}/notes`);
        setNotes(await response.json());
    };

    useEffect(() => {
        loadNotes();
    }, [userId]);

    return { notes, loadNotes };
};
