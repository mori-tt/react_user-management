import { HeaderLayout } from "@/components/template/HeaderLayout";

export const UserManagement = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <HeaderLayout>
      <p>UserManagement</p>
      {children}
    </HeaderLayout>
  );
};
