import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
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
            setLoading(false);
            throw new Error("User not found");
          }
          return res.json();
        })
        .then((data) => {
          const isAdmin = data.id === 10 ? true : false;
          setLoginUser({ ...data, isAdmin });
          console.log("Logged in user:", data);
          showMessage({ title: "ログインしました", status: "success" });
          navigate("/home");
        })
        .catch((error) => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    [navigate, showMessage, setLoginUser]
  );
  return { login, loading };
};
