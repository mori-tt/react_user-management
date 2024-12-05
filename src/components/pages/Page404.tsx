import { HeaderLayout } from "@/components/template/HeaderLayout";

export const Page404 = ({ children }: { children?: React.ReactNode }) => {
  return (
    <HeaderLayout>
      <p>Page404</p>
      {children}
    </HeaderLayout>
  );
};
