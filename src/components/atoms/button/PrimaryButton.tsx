import { Button } from "@/components/ui/button";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: React.FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.500"
      color="#fff"
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
