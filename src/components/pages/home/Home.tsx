import { HeaderLayout } from "@/components/template/HeaderLayout";

export const Home = ({ children }: { children?: React.ReactNode }) => {
  return (
    <HeaderLayout>
      <p>Home</p>
      {children}
    </HeaderLayout>
  );
};
