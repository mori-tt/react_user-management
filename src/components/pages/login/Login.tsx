import { HeaderLayout } from "@/components/template/HeaderLayout";

export const Login = ({ children }: { children?: React.ReactNode }) => {
  return (
    <HeaderLayout>
      <p>Login</p>
      {children}
    </HeaderLayout>
  );
};
