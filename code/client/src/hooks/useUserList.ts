import { useEffect, useState } from "react";
import { User } from "../types";

export const useUserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/users");
            setUsers(await response.json());
        };
        fetchData();
    }, []);

    return users;
};
