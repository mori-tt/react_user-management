import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const Header: React.FC = () => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <RouterLink to="/home">
        <Flex align="center" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
      </RouterLink>

      <Flex
        align="center"
        fontSize="sm"
        display={{ base: "none", md: "flex" }}
        gap={4}
      >
        <Box pr={4}>
          <RouterLink to="/home/user_management" style={{ color: "#fff" }}>
            ユーザー一覧
          </RouterLink>
        </Box>
        <RouterLink to="/home/setting" style={{ color: "#fff" }}>
          設定
        </RouterLink>
      </Flex>
      <MenuDrawer />
    </Flex>
  );
};
