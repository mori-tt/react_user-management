import { toaster } from "@/components/ui/toaster";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const showMessage = useCallback((props: Props) => {
    const { title, status } = props;

    toaster.create({
      title: title,
      type: status,
      duration: 3000,
    });
  }, []);

  return { showMessage };
};
