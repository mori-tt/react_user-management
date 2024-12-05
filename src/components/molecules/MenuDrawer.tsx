import { Button } from "@/components/ui/button";
import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Drawer, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const MenuDrawer = () => {
  const navigate = useNavigate();

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
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
      </Drawer.Trigger>
      <DrawerContent>
        <DrawerHeader bg="teal.100" />
        <DrawerBody p={0} bg="teal.100">
          <Button w="100%" variant="ghost" onClick={() => navigate("/home")}>
            Top
          </Button>
          <Button
            w="100%"
            variant="ghost"
            onClick={() => navigate("/home/user_management")}
          >
            ユーザー一覧
          </Button>
          <Button
            w="100%"
            variant="ghost"
            onClick={() => navigate("/home/setting")}
          >
            設定
          </Button>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </Drawer.Root>
  );
};
