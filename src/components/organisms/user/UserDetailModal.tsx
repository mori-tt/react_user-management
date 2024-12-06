import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Stack, Text, Image, Box } from "@chakra-ui/react";
import { User } from "@/types/api/type";
import { memo } from "react";

type Props = {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
};

export const UserDetailModal: React.FC<Props> = memo((props) => {
  const { user, isOpen, onClose, imageUrl } = props;

  if (!user) return null;

  return (
    <DialogRoot open={isOpen}>
      <DialogContent
        width={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
        maxWidth="600px"
      >
        <DialogHeader>
          <DialogTitle fontSize={{ base: "lg", md: "xl" }}>
            {user.username}
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
                <Text fontSize={{ base: "sm", md: "md" }}>{user.name}</Text>
              </Stack>
              <Stack>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  メール
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>{user.email}</Text>
              </Stack>
              <Stack>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  電話番号
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>{user.phone}</Text>
              </Stack>
              <Stack>
                <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                  会社名
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  {user.company.name}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </DialogBody>
        <DialogFooter>
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
