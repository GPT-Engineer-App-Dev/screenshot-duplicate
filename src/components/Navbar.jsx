import { Box, Flex, Text, IconButton, Input, InputGroup, InputLeftElement, VStack, HStack, Avatar, Spacer } from "@chakra-ui/react";
import { FaSearch, FaPlus, FaBell, FaCog, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={2} borderBottom="1px" borderColor="gray.200">
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold">Linear</Text>
        <Spacer />
        <InputGroup maxW="300px" mx={4}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <IconButton aria-label="New Issue" icon={<FaPlus />} mx={2} />
        <IconButton aria-label="Notifications" icon={<FaBell />} mx={2} />
        <IconButton aria-label="Settings" icon={<FaCog />} mx={2} />
        <Avatar size="sm" name="User" src="https://bit.ly/broken-link" mx={2} />
      </Flex>
    </Box>
  );
};

export default Navbar;