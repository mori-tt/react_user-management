import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClickUser: () => void;
};

export const UserCard: React.FC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClickUser } = props;

  return (
    <Box
      w="230px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClickUser}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
