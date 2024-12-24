// import {
//   Box,
//   Button,
//   Heading,
//   Input,
//   Textarea,
//   VStack,
//   useColorModeValue,
// } from "@chakra-ui/react";

// function ContactMe() {
//   const bg = useColorModeValue("gray.100", "gray.900"); // Background for the section
//   const inputBg = useColorModeValue("white", "gray.800"); // Input and Textarea background
//   const textColor = useColorModeValue("black", "white");

//   return (
//     <Box bg={bg} color={textColor} py={10} minH="100vh">
//       <VStack
//         bg={useColorModeValue("white", "gray.800")}
//         maxW="600px"
//         mx="auto"
//         p={8}
//         borderRadius="md"
//         boxShadow="lg"
//         spacing={6}
//       >
//         <Heading
//           as="h2"
//           size="lg"
//           color={useColorModeValue("teal.500", "teal.300")}
//         >
//           Contact Me
//         </Heading>
//         <Input
//           placeholder="Your Name"
//           bg={inputBg}
//           color={textColor}
//           border="1px solid"
//           borderColor={useColorModeValue("gray.300", "gray.600")}
//         />
//         <Input
//           placeholder="Your Email"
//           bg={inputBg}
//           color={textColor}
//           border="1px solid"
//           borderColor={useColorModeValue("gray.300", "gray.600")}
//         />
//         <Textarea
//           placeholder="Your Message"
//           bg={inputBg}
//           color={textColor}
//           border="1px solid"
//           borderColor={useColorModeValue("gray.300", "gray.600")}
//           resize="none"
//         />
//         <Button colorScheme="teal" size="md" alignSelf="flex-start">
//           Send Message
//         </Button>
//       </VStack>
//     </Box>
//   );
// }

// export default ContactMe;

import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function ContactInfo() {
  const textColor = useColorModeValue("black", "white");

  return (
    <Box
      py={10}
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      color={textColor}
    >
      <VStack
        spacing={6}
        maxW="600px"
        mx="auto"
        p={8}
        bg={useColorModeValue("white", "gray.800")}
        borderRadius="md"
        boxShadow="lg"
      >
        <Heading
          as="h2"
          size="lg"
          color={useColorModeValue("teal.500", "teal.300")}
        >
          Contact Information
        </Heading>
        <Text>
          <strong>Email:</strong>{" "}
          <Link href="mailto:mariam.tskhadadze@gmail.com" color="teal.500">
            mtskhadadze0@gmail.com
          </Link>
        </Text>
        <Text>
          <strong>Phone:</strong> +995 591 006 444
        </Text>
        {/* <Text>
          <strong>LinkedIn:</strong>{" "}
          <Link
            href="https://linkedin.com/in/mariam-tskhadadze"
            color="teal.500"
            isExternal
          >
            linkedin.com/in/mariam-tskhadadze
          </Link>
        </Text> */}
        <Text>
          <strong>GitHub:</strong>{" "}
          <Link
            href="https://github.com/Mariamtskhadadze"
            color="teal.500"
            isExternal
          >
            github.com/Mariamtskhadadze
          </Link>
        </Text>
        <Text>
          <strong>Location:</strong> Tbilisi, Georgia (Open to remote work)
        </Text>
        <Text>
          <strong>Availability:</strong> Available for freelance or full-time
          opportunities
        </Text>
      </VStack>
    </Box>
  );
}

export default ContactInfo;
