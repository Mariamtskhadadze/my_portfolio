// import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

// const AboutMe = () => {
//   return (
//     <Flex
//       direction="column"
//       align="center"
//       justify="center"
//       minH="100vh"
//       bg="gray.50"
//       p={[4, 8]}
//     >
//       <Box
//         maxW="800px"
//         textAlign="center"
//         bg="white"
//         p={8}
//         borderRadius="md"
//         shadow="md"
//       >
//         <Heading as="h1" size="xl" color="teal.500" mb={4}>
//           About Me
//         </Heading>
//         <VStack spacing={4} align="start">
//           <Text fontSize="lg" color="gray.700">
//             Hi, I’m Mariam Tskhadadze, a passionate front-end developer
//             specializing in crafting intuitive user interfaces and responsive
//             web applications. I love turning ideas into beautiful, functional,
//             and accessible digital experiences.
//           </Text>
//           <Text fontSize="md" color="gray.600">
//             With expertise in modern JavaScript frameworks like React, extensive
//             experience with CSS-in-JS libraries, and a knack for design systems,
//             I aim to create seamless and engaging user experiences. I’m also
//             proficient in collaborating with cross-functional teams and
//             translating design mockups into pixel-perfect code.
//           </Text>
//           <Text fontSize="md" color="gray.600">
//             Beyond coding, I enjoy exploring new technologies, contributing to
//             open-source projects, and sharing my knowledge through blogs. In my
//             free time, you’ll find me reading, sketching, or traveling to
//             experience new cultures.
//           </Text>
//         </VStack>
//       </Box>
//     </Flex>
//   );
// };

// export default AboutMe;

import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function AboutMe() {
  // Dynamically switch colors based on the color mode
  const bg = useColorModeValue("gray.100", "gray.900"); // Light for light mode, dark for dark mode
  const textColor = useColorModeValue("black", "white");

  return (
    <Box bg={bg} minH="100vh" py={10} color={textColor}>
      <VStack
        bg={useColorModeValue("white", "gray.800")}
        maxW="800px"
        mx="auto"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        spacing={5}
      >
        <Heading
          as="h1"
          size="lg"
          color={useColorModeValue("teal.500", "teal.300")}
        >
          About Me
        </Heading>
        <Text>
          Hi, I’m Mariam Tskhadadze, a passionate front-end developer
          specializing in crafting intuitive user interfaces and responsive web
          applications. I love turning ideas into beautiful, functional, and
          accessible digital experiences.
        </Text>
        <Text>
          With expertise in modern JavaScript frameworks like React, extensive
          experience with CSS-in-JS libraries, and a knack for design systems, I
          aim to create seamless and engaging user experiences.
        </Text>
        <Link color={useColorModeValue("teal.500", "teal.300")} href="#">
          Read More
        </Link>
      </VStack>
    </Box>
  );
}

export default AboutMe;
