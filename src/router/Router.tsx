import { Home } from "@/components/pages/home/Home";
import { Setting } from "@/components/pages/home/Setting";
import { UserManagement } from "@/components/pages/home/UserManagement";
import { Login } from "@/components/pages/login/Login";
import { Page404 } from "@/components/pages/Page404";
import { LoginUserProvider } from "@/providers/LoginUserProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <LoginUserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/user_management" element={<UserManagement />} />
            <Route path="/home/setting" element={<Setting />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </LoginUserProvider>
      </BrowserRouter>
    </div>
  );
};
