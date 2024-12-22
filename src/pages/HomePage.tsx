import { Box, Heading, Text, Button } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box py={10} px={6} textAlign="center">
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to My Portfolio
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={6}>
        I'm Mariam Tskhadadze, a passionate front-end developer. Explore my
        projects and learn more about me!
      </Text>
      <Button colorScheme="teal" size="lg" as="a" href="/projects">
        View My Projects
      </Button>
    </Box>
  );
};

export default HomePage;
