import { Box, Flex, VStack, HStack, Text, Spacer, Avatar, Badge, IconButton } from "@chakra-ui/react";
import { FaMagic, FaBug, FaDesignServices, FaContent, FaMarketing, FaTesting, FaPlus } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";

const tasks = {
  inProgress: [
    { title: "Push new update", status: "ENG-345", statusColor: "yellow", icon: <FaMagic />, iconLabel: "Magic", date: "Feb 18", assignee: "User" },
    { title: "Design mobile components", status: "ENG-345", statusColor: "yellow", icon: <FaDesignServices />, iconLabel: "Design", date: "Feb 18", assignee: "User" },
    { title: "Release new website", status: "ENG-345", statusColor: "yellow", icon: <FaMagic />, iconLabel: "Magic", date: "Feb 18", assignee: "User" },
  ],
  backlog: [
    { title: "Update legal documentation", status: "ENG-345", statusColor: "red", icon: <FaContent />, iconLabel: "Content", date: "Feb 18", assignee: "User" },
    { title: "Fix CSS in team graph", status: "ENG-345", statusColor: "red", icon: <FaBug />, iconLabel: "Bug", date: "Feb 18", assignee: "User" },
  ],
  icebox: [
    { title: "Enable data transmission beams", status: "ENG-345", statusColor: "blue", icon: <FaMagic />, iconLabel: "Magic", date: "Feb 18", assignee: "User" },
    { title: "Tease product update", status: "ENG-345", statusColor: "blue", icon: <FaMarketing />, iconLabel: "Marketing", date: "Feb 18", assignee: "User" },
  ],
  done: [
    { title: "Design blog page", status: "ENG-345", statusColor: "green", icon: <FaDesignServices />, iconLabel: "Design", date: "Feb 18", assignee: "User" },
    { title: "Compile user feedback", status: "ENG-345", statusColor: "green", icon: <FaTesting />, iconLabel: "Testing", date: "Feb 18", assignee: "User" },
    { title: "Fix CSS in hero section", status: "ENG-345", statusColor: "green", icon: <FaBug />, iconLabel: "Bug", date: "Feb 18", assignee: "User" },
  ],
};

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Sidebar />
        <Box flex="1" p={4}>
          <Flex justifyContent="space-between" mb={4}>
            <Text fontSize="2xl" fontWeight="bold">Project Hotek Chain</Text>
            <HStack>
              <Badge colorScheme="yellow">In Progress</Badge>
              <Text>Lead: Prince Ojakorotu</Text>
              <Avatar size="sm" name="Prince Ojakorotu" src="https://bit.ly/broken-link" />
            </HStack>
          </Flex>
          <Flex justifyContent="space-between" mb={4}>
            <HStack>
              <Badge colorScheme="yellow">Engineering 80%</Badge>
              <IconButton aria-label="Filter" icon={<FaPlus />} />
            </HStack>
            <HStack>
              <IconButton aria-label="Views" icon={<FaPlus />} />
              <IconButton aria-label="Updates" icon={<FaPlus />} />
            </HStack>
          </Flex>
          <Flex>
            <VStack align="start" spacing={4} flex="1">
              <TaskList title="In Progress" tasks={tasks.inProgress} />
              <TaskList title="Backlog" tasks={tasks.backlog} />
              <TaskList title="Icebox" tasks={tasks.icebox} />
              <TaskList title="Done" tasks={tasks.done} />
            </VStack>
            <Box w="300px" p={4} bg="gray.50" borderRadius="md" ml={4}>
              <Text fontSize="lg" fontWeight="bold" mb={4}>Project Hotek Chain</Text>
              <VStack align="start" spacing={4}>
                <HStack>
                  <Text>Status:</Text>
                  <Badge colorScheme="yellow">In Progress</Badge>
                </HStack>
                <HStack>
                  <Text>Lead:</Text>
                  <Text>Prince Ojakorotu</Text>
                </HStack>
                <HStack>
                  <Text>Members:</Text>
                  <Avatar size="sm" name="Member 1" src="https://bit.ly/broken-link" />
                  <Avatar size="sm" name="Member 2" src="https://bit.ly/broken-link" />
                  <Avatar size="sm" name="Member 3" src="https://bit.ly/broken-link" />
                </HStack>
                <HStack>
                  <Text>Target date:</Text>
                  <Text>Feb 18</Text>
                </HStack>
                <HStack>
                  <Text>Team:</Text>
                  <Text>ENG</Text>
                </HStack>
              </VStack>
              <Box mt={8}>
                <Text fontSize="lg" fontWeight="bold" mb={4}>Progress</Text>
                <Box h="150px" bg="gray.100" borderRadius="md"></Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;