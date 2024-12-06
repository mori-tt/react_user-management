import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Stack, Text, Image, Box, Input } from "@chakra-ui/react";
import { User } from "@/types/api/type";
import { ChangeEvent, memo, useEffect, useState } from "react";

type Props = {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  isAdmin?: boolean;
};

export const UserDetailModal: React.FC<Props> = memo((props) => {
  const { user, isOpen, onClose, imageUrl, isAdmin = false } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
    setCompany(user?.company.name ?? "");
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  const onChangeCompany = (e: ChangeEvent<HTMLInputElement>) =>
    setCompany(e.target.value);

  const onClickUpdate = () => {
    alert();
  };

  if (!user) return null;

  return (
    <DialogRoot open={isOpen}>
      <DialogContent
        width={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
        maxWidth="600px"
      >
        <DialogHeader>
          <DialogTitle fontSize={{ base: "lg", md: "xl" }}>
            <Input
              value={username}
              onChange={onChangeUserName}
              readOnly={!isAdmin}
            />
          </DialogTitle>
        </DialogHeader>
        <DialogBody textAlign="center">
          <Stack gap={4} py={{ base: 2, md: 4 }}>
            <Box>
              <Image
                borderRadius="full"
                boxSize={{ base: "150px", md: "200px" }}
                src={imageUrl}
                alt={user.name}
                m="auto"
              />
            </Box>
            <Stack gap={{ base: 2, md: 4 }}>
              <Stack>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  名前
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  <Input
                    value={name}
                    onChange={onChangeName}
                    readOnly={!isAdmin}
                  />
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  メール
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  <Input
                    value={email}
                    onChange={onChangeEmail}
                    readOnly={!isAdmin}
                  />
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  電話番号
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  <Input
                    value={phone}
                    onChange={onChangePhone}
                    readOnly={!isAdmin}
                  />
                </Text>
              </Stack>
              <Stack>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  会社名
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  <Input
                    value={company}
                    onChange={onChangeCompany}
                    readOnly={!isAdmin}
                  />
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </DialogBody>
        <DialogFooter>
          {isAdmin && (
            <Button
              onClick={onClickUpdate}
              size={{ base: "sm", md: "md" }}
              px={{ base: 4, md: 6 }}
            >
              更新
            </Button>
          )}

          <Button
            onClick={onClose}
            size={{ base: "sm", md: "md" }}
            px={{ base: 4, md: 6 }}
          >
            閉じる
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
});
