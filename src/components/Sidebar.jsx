import { Box, VStack, Text, IconButton, HStack, Avatar, Spacer } from "@chakra-ui/react";
import { FaInbox, FaList, FaRoad, FaUsers, FaSlack, FaAlignJustify, FaPlus, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="gray.50" w="250px" h="100vh" p={4} borderRight="1px" borderColor="gray.200">
      <VStack align="start" spacing={4}>
        <HStack>
          <Avatar size="sm" name="Design Nerd" src="https://bit.ly/broken-link" />
          <Text>Design Nerd (Team lead)</Text>
        </HStack>
        <IconButton aria-label="New Issue" icon={<FaPlus />} />
        <Text fontSize="sm" color="gray.500">INBOX</Text>
        <HStack>
          <FaInbox />
          <Text>Inbox</Text>
        </HStack>
        <HStack>
          <FaList />
          <Text>My issues</Text>
        </HStack>
        <HStack>
          <FaRoad />
          <Text>Roadmaps</Text>
        </HStack>
        <HStack>
          <FaUsers />
          <Text>Teams</Text>
        </HStack>
        <Text fontSize="sm" color="gray.500">FAVORITES</Text>
        <HStack>
          <FaSlack />
          <Text>Slack Integration</Text>
        </HStack>
        <HStack>
          <FaAlignJustify />
          <Text>Wrap Mode</Text>
        </HStack>
        <Text fontSize="sm" color="gray.500">YOUR TEAMS</Text>
        <HStack>
          <FaUsers />
          <Text>Design</Text>
        </HStack>
        <HStack>
          <FaUsers />
          <Text>Engineering</Text>
        </HStack>
        <Spacer />
        <HStack>
          <FaQuestionCircle />
          <Text>Help & support</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;