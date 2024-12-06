import { User } from "@/types/api/type";
import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data: Array<User>) => setUsers(data))
      .catch((error) => {
        console.error(error);
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
        setUsers([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage]);
  return { getUsers, users, loading };
};
