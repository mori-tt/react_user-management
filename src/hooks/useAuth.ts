import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "GET",
      })
        .then((res) => {
          if (!res.ok) {
            showMessage({
              title: "ユーザーが見つかりません",
              status: "error",
            });
            throw new Error("User not found");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Logged in user:", data);
          showMessage({ title: "ログインしました", status: "success" });
          navigate("/home");
        })
        .catch((error) => {
          showMessage({ title: "ログインできません", status: "error" });
        })
        .finally(() => setLoading(false));
    },
    [navigate, showMessage]
  );
  return { login, loading };
};
