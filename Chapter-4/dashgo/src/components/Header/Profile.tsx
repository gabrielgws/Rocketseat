import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Gabriel Willian</Text>
        <Text color="gray.300" fontSize="small">gabriel.gws@hotmail.com</Text>
      </Box>
      )}

      <Avatar size="md" name="Gabriel Willian" src="https://github.com/gabrielgws.png" />
    </Flex>
  );
}