import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  useColorModeValue,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiMapPin, FiGithub } from "react-icons/fi"; // Importing icons including GitHub

function AboutMe() {
  const bg = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box bg={bg} minH="100vh" py={10} color={textColor}>
      {/* About Me Section */}
      <VStack
        bg={useColorModeValue("white", "gray.800")}
        maxW="800px"
        mx="auto"
        p={8}
        borderRadius="xl"
        boxShadow="lg"
        spacing={6}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color={useColorModeValue("teal.500", "teal.300")}
          textAlign="center"
        >
          About Me
        </Heading>
        <Text fontSize="lg" lineHeight="1.7" textAlign="center">
          Hello, I am Mariam Tskhadadze, a junior front-end developer. Although
          I have not yet gained professional work experience, I constantly work
          on personal projects, complete online courses, and have gained
          valuable knowledge from college. I first discovered web development
          three years ago and was immediately intrigued. Since then, I've
          dedicated myself to learning and growing in this field. My passion
          lies in technology, and my ultimate goal is to become a full-stack
          developer. I am always open to new opportunities and excited about
          building great user experiences.
        </Text>

        {/* Contact Information with Icons */}
        <VStack spacing={6} align="flex-start" w="full">
          <HStack spacing={4} fontSize="lg" lineHeight="1.7">
            <Icon as={FiMail} color="teal.500" />
            <Link href="mailto:mariam.tskhadadze@gmail.com" color="teal.500">
              mtskhadadze0@gmail.com
            </Link>
          </HStack>

          {/* GitHub under Email */}
          <HStack spacing={4} fontSize="lg" lineHeight="1.7">
            <Icon as={FiGithub} color="teal.500" />
            <Link
              href="https://github.com/Mariamtskhadadze"
              color="teal.500"
              isExternal
            >
              github.com/Mariamtskhadadze
            </Link>
          </HStack>

          <HStack spacing={4} fontSize="lg" lineHeight="1.7">
            <Icon as={FiPhone} color="teal.500" />
            <Text>+995 591 006 444</Text>
          </HStack>

          <HStack spacing={4} fontSize="lg" lineHeight="1.7">
            <Icon as={FiMapPin} color="teal.500" />
            <Text>
              Tbilisi, Georgia (Available for freelance or full-time
              opportunities)
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default AboutMe;
