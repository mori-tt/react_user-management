import { IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";

export const MenuIconButton = () => {
  return (
    <IconButton
      alignSelf="flex-end"
      aria-label="メニューボタン"
      size="md"
      variant="ghost"
      colorPalette={"teal"}
      display={{ base: "flex", md: "none" }}
      justifyContent="center"
      _icon={{
        color: "#fff",
        _hover: {
          color: "teal.500",
        },
      }}
    >
      <FaBars />
    </IconButton>
  );
};
