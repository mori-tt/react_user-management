import { UserCard } from "@/components/organisms/user/UserCard";
import { HeaderLayout } from "@/components/template/HeaderLayout";
import { useAllUsers } from "@/hooks/useAllUsers";
import { SimpleGrid, Flex, Spinner, Center } from "@chakra-ui/react";
import { useEffect } from "react";

export const UserManagement = () => {
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);
  return (
    <HeaderLayout>
      {loading ? (
        <Center h="80vh">
          <Spinner />
        </Center>
      ) : (
        <Flex justify="center" w="100%">
          <SimpleGrid
            gap={{ base: 4, md: 6 }}
            p={{ base: 4, md: 6 }}
            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
          >
            {users.map((user) => (
              <UserCard
                key={user.id}
                imageUrl={`https://picsum.photos/seed/${user.id}/800`}
                userName={user.username}
                fullName={user.name}
              />
            ))}
          </SimpleGrid>
        </Flex>
      )}
    </HeaderLayout>
  );
};
