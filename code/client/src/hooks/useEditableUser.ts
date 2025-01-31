import { useState, useEffect, ChangeEventHandler } from "react";
import { User } from "../types";
import { useNavigate } from "react-router";

export const useEditableUser = (id: string) => {
  const isNewUser = id === 'new';
  const [originalUser, setOriginalUser] = useState<User>();
  const [user, setUser] = useState<Partial<User>>();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setOriginalUser(data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isNewUser) {
      setUser({})
      setLoading(false);
      setIsEditing(true);
    } else {
      fetchUser();
    }
  }, [id]);

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/users${isNewUser ? '' : '/' + id}`, {
        method: isNewUser ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setOriginalUser(user as User);
        setIsEditing(false);
        if (isNewUser) {
          const createdUser = await response.json();
          navigate(`/users/${createdUser.id}`);
        }
      } else {
        console.error("Failed to save user data");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const handleCancel = () => {
    setUser(originalUser);
    setIsEditing(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value } as User);
  };

  const handleStartEditing = () => setIsEditing(true)

  return {loading, user, isEditing, handleSave, handleCancel, handleChange, handleStartEditing};
}
