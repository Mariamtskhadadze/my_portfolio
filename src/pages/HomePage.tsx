import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

const HomePage = () => {
  const { colorMode } = useColorMode();

  const bgColor = colorMode === "dark" ? "gray.900" : "gray.50";
  const textColor = colorMode === "dark" ? "white" : "black";
  const headingColor = colorMode === "dark" ? "teal.400" : "teal.600";
  const buttonColorScheme = colorMode === "dark" ? "teal" : "blue";
  const secondaryButtonColorScheme = colorMode === "dark" ? "blue" : "teal";

  return (
    <Box
      bg={bgColor}
      py={16}
      px={6}
      textAlign="center"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color={textColor}
    >
      {/* Main Content */}
      <Box>
        <Heading as="h1" size="3xl" mb={6} color={headingColor}>
          Welcome to My Portfolio
        </Heading>
        <Text
          fontSize="2xl"
          color={colorMode === "dark" ? "gray.300" : "gray.700"}
          mb={12}
        >
          Hi, I'm{" "}
          <Text as="span" fontWeight="bold">
            Mariam Tskhadadze
          </Text>
          , a passionate front-end developer. Explore my projects and learn more
          about me!
        </Text>
        <HStack justify="center" spacing={4}>
          <Button
            colorScheme={buttonColorScheme}
            size="lg"
            as="a"
            href="/projects"
          >
            View My Projects
          </Button>
          <Button
            size="lg"
            colorScheme={secondaryButtonColorScheme}
            as="a"
            href="/cv"
          >
            View My CV
          </Button>
        </HStack>
      </Box>

      {/* Skills Section */}
      <VStack mt={16} spacing={4}>
        <Text fontSize="xl" color={headingColor} fontWeight="bold">
          My Tech Stack
        </Text>
        <HStack spacing={6}>
          <Text
            fontSize="lg"
            color={colorMode === "dark" ? "gray.300" : "gray.700"}
          >
            HTML
          </Text>
          <Text
            fontSize="lg"
            color={colorMode === "dark" ? "gray.300" : "gray.700"}
          >
            CSS
          </Text>
          <Text
            fontSize="lg"
            color={colorMode === "dark" ? "gray.300" : "gray.700"}
          >
            JavaScript
          </Text>
          <Text
            fontSize="lg"
            color={colorMode === "dark" ? "gray.300" : "gray.700"}
          >
            React
          </Text>
          <Text
            fontSize="lg"
            color={colorMode === "dark" ? "gray.300" : "gray.700"}
          >
            Chakra UI
          </Text>
          <Text
            fontSize="lg"
            color={colorMode === "dark" ? "gray.300" : "gray.700"}
          >
            Git
          </Text>
        </HStack>
      </VStack>

      {/* New Tagline */}
      <Box mt={16}>
        <Text fontSize="lg" color={headingColor} fontWeight="bold">
          "Transforming ideas into reality, one line of code at a time."
        </Text>
      </Box>

      {/* Footer */}
      <Text
        fontSize="sm"
        color={colorMode === "dark" ? "gray.500" : "gray.600"}
        mt="auto"
        mb={4}
      >
        © {new Date().getFullYear()} Mariam Tskhadadze. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default HomePage;
