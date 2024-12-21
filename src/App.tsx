import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react"; // Chakra UI components

const App: React.FC = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to My Chakra UI App
      </Heading>
      <Text fontSize="lg" mb={4}>
        This is an example of an app using Chakra UI with a custom theme.
      </Text>
      <Button colorScheme="teal">Click Me</Button>
    </Box>
  );
};

export default App;
