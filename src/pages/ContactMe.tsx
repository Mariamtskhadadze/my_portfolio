// import {
//   Box,
//   Flex,
//   Heading,
//   Input,
//   Textarea,
//   Button,
//   FormControl,
//   FormLabel,
// } from "@chakra-ui/react";

// const ContactMe = () => {
//   return (
//     <Flex
//       direction="column"
//       align="center"
//       justify="center"
//       minH="100vh"
//       bg="gray.50"
//       p={[4, 8]}
//     >
//       <Box maxW="600px" w="100%" bg="white" p={8} borderRadius="md" shadow="md">
//         {/* Contact Me Title */}
//         <Heading as="h1" size="xl" color="teal.500" textAlign="center" mb={6}>
//           Contact Me
//         </Heading>

//         {/* Contact Form */}
//         <form>
//           {/* Name Field */}
//           <FormControl id="name" isRequired mb={4}>
//             <FormLabel>Your Name</FormLabel>
//             <Input
//               type="text"
//               placeholder="Enter your name"
//               focusBorderColor="teal.500"
//             />
//           </FormControl>

//           {/* Email Field */}
//           <FormControl id="email" isRequired mb={4}>
//             <FormLabel>Your Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="Enter your email"
//               focusBorderColor="teal.500"
//             />
//           </FormControl>

//           {/* Message Field */}
//           <FormControl id="message" isRequired mb={6}>
//             <FormLabel>Your Message</FormLabel>
//             <Textarea
//               placeholder="Enter your message"
//               focusBorderColor="teal.500"
//             />
//           </FormControl>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             colorScheme="teal"
//             size="lg"
//             w="100%"
//             _hover={{ bg: "teal.600" }}
//           >
//             Send Message
//           </Button>
//         </form>
//       </Box>
//     </Flex>
//   );
// };

// export default ContactMe;

import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

function ContactMe() {
  const bg = useColorModeValue("gray.100", "gray.900"); // Background for the section
  const inputBg = useColorModeValue("white", "gray.800"); // Input and Textarea background
  const textColor = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={textColor} py={10} minH="100vh">
      <VStack
        bg={useColorModeValue("white", "gray.800")}
        maxW="600px"
        mx="auto"
        p={8}
        borderRadius="md"
        boxShadow="lg"
        spacing={6}
      >
        <Heading
          as="h2"
          size="lg"
          color={useColorModeValue("teal.500", "teal.300")}
        >
          Contact Me
        </Heading>
        <Input
          placeholder="Your Name"
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.600")}
        />
        <Input
          placeholder="Your Email"
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.600")}
        />
        <Textarea
          placeholder="Your Message"
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.600")}
          resize="none"
        />
        <Button colorScheme="teal" size="md" alignSelf="flex-start">
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}

export default ContactMe;
