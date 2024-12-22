import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.50"
      p={[4, 8]}
    >
      <Box
        maxW="800px"
        textAlign="center"
        bg="white"
        p={8}
        borderRadius="md"
        shadow="md"
      >
        <Heading as="h1" size="xl" color="teal.500" mb={4}>
          About Me
        </Heading>
        <VStack spacing={4} align="start">
          <Text fontSize="lg" color="gray.700">
            Hi, I’m Mariam Tskhadadze, a passionate front-end developer
            specializing in crafting intuitive user interfaces and responsive
            web applications. I love turning ideas into beautiful, functional,
            and accessible digital experiences.
          </Text>
          <Text fontSize="md" color="gray.600">
            With expertise in modern JavaScript frameworks like React, extensive
            experience with CSS-in-JS libraries, and a knack for design systems,
            I aim to create seamless and engaging user experiences. I’m also
            proficient in collaborating with cross-functional teams and
            translating design mockups into pixel-perfect code.
          </Text>
          <Text fontSize="md" color="gray.600">
            Beyond coding, I enjoy exploring new technologies, contributing to
            open-source projects, and sharing my knowledge through blogs. In my
            free time, you’ll find me reading, sketching, or traveling to
            experience new cultures.
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default AboutMe;
