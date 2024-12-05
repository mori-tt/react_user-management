import { HeaderLayout } from "@/components/template/HeaderLayout";

export const Setting = ({ children }: { children?: React.ReactNode }) => {
  return (
    <HeaderLayout>
      <p>Setting</p>
      {children}
    </HeaderLayout>
  );
};
