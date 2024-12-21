import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to My Portfolio
      </Heading>
      <Text fontSize="lg" mb={4}>
        This is an app about my profession.
      </Text>
      <Button colorScheme="teal">Click Me</Button>
    </Box>
  );
};

export default App;
