import { User } from "@/types/api/type";
import { LoginUser } from "@/providers/LoginUserProvider";
import { useState, useCallback } from "react";

export const useUserModal = () => {
  const [selectedUser, setSelectedUser] = useState<LoginUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = useCallback((user: User) => {
    const loginUser: LoginUser = { ...user, isAdmin: false };
    setSelectedUser(loginUser);
    setIsModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedUser(null);
  }, []);

  return { selectedUser, isModalOpen, onOpenModal, onCloseModal };
};
