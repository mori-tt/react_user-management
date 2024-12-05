import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "GET",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("ユーザーが見つかりません");
          }
          return res.json();
        })
        .then((data) => {
          // dataを何らかの形で使用する
          console.log("Logged in user:", data);
          navigate("/home");
        })
        .catch((error) => alert(error.message))
        .finally(() => setLoading(false));
    },
    [navigate]
  );
  return { login, loading };
};
