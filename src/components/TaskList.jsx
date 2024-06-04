import { Box, VStack, HStack, Text, IconButton, Avatar, Badge } from "@chakra-ui/react";
import { FaPlus, FaMagic, FaBug, FaDesignServices, FaContent, FaMarketing, FaTesting } from "react-icons/fa";

const TaskList = ({ title, tasks }) => {
  return (
    <Box bg="gray.50" p={4} borderRadius="md" w="full">
      <HStack justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">{title}</Text>
        <IconButton aria-label="Add Task" icon={<FaPlus />} />
      </HStack>
      <VStack align="start" spacing={4} mt={4}>
        {tasks.map((task, index) => (
          <HStack key={index} w="full" justifyContent="space-between">
            <HStack>
              <Badge colorScheme={task.statusColor}>{task.status}</Badge>
              <Text>{task.title}</Text>
            </HStack>
            <HStack>
              <IconButton aria-label={task.iconLabel} icon={task.icon} size="sm" />
              <Text>{task.date}</Text>
              <Avatar size="xs" name={task.assignee} src="https://bit.ly/broken-link" />
            </HStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default TaskList;