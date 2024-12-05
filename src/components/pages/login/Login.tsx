import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { HeaderLayout } from "@/components/template/HeaderLayout";
import { useAuth } from "@/hooks/useAuth";
import { Box, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState } from "react";

export const Login = memo(({ children }: { children?: React.ReactNode }) => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => login(userId);
  return (
    <HeaderLayout>
      <Flex align="center" justify="center" height="100vh">
        <Box bg="#fff" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            ユーザー管理アプリ
          </Heading>
          <Stack py={4} px={10}>
            <Input
              placeholder="ユーザーID"
              value={userId}
              onChange={onChangeUserId}
            />
            <PrimaryButton
              disabled={userId === ""}
              loading={loading || loading}
              onClick={onClickLogin}
            >
              ログイン
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
      {children}
    </HeaderLayout>
  );
});
