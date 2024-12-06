import { User } from "@/types/api/type";
import { useState, useCallback } from "react";

export const useUserModal = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = useCallback((user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedUser(null);
  }, []);

  return { selectedUser, isModalOpen, onOpenModal, onCloseModal };
};
