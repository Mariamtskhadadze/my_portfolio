// import {
//   Box,
//   Heading,
//   Text,
//   Button,
//   Stack,
//   Input,
//   Textarea,
// } from "@chakra-ui/react";

// export default function ContactMe() {
//   return (
//     <Box p={6}>
//       <Heading>Contact Me</Heading>
//       <Text mt={4}>I'd love to hear from you! Send me a message below:</Text>
//       <Stack spacing={4} mt={6}>
//         <Input placeholder="Your Name" />
//         <Input placeholder="Your Email" type="email" />
//         <Textarea placeholder="Your Message" />
//         <Button colorScheme="teal">Send Message</Button>
//       </Stack>
//     </Box>
//   );
// }

import {
  Box,
  Flex,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.50"
      p={[4, 8]}
    >
      <Box maxW="600px" w="100%" bg="white" p={8} borderRadius="md" shadow="md">
        {/* Contact Me Title */}
        <Heading as="h1" size="xl" color="teal.500" textAlign="center" mb={6}>
          Contact Me
        </Heading>

        {/* Contact Form */}
        <form>
          {/* Name Field */}
          <FormControl id="name" isRequired mb={4}>
            <FormLabel>Your Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              focusBorderColor="teal.500"
            />
          </FormControl>

          {/* Email Field */}
          <FormControl id="email" isRequired mb={4}>
            <FormLabel>Your Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              focusBorderColor="teal.500"
            />
          </FormControl>

          {/* Message Field */}
          <FormControl id="message" isRequired mb={6}>
            <FormLabel>Your Message</FormLabel>
            <Textarea
              placeholder="Enter your message"
              focusBorderColor="teal.500"
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            w="100%"
            _hover={{ bg: "teal.600" }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactMe;
