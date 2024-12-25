import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
  Flex,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";

function ContactMe() {
  const bg = useColorModeValue("gray.100", "gray.900");
  const inputBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  // Initialize the toast hook
  const toast = useToast();

  // Create references for the input fields with proper types
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    // Show toast when the submit button is clicked
    toast({
      title: "Message Sent",
      description: "Your message has been successfully sent.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Clear the input fields, checking if refs are defined
    if (firstNameRef.current) firstNameRef.current.value = "";
    if (lastNameRef.current) lastNameRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

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
          Get in Touch
        </Heading>

        <Flex w="100%" gap={4}>
          <Input
            ref={firstNameRef}
            placeholder="First Name"
            bg={inputBg}
            color={textColor}
            border="1px solid"
            borderColor={useColorModeValue("gray.300", "gray.600")}
            isRequired
            focusBorderColor={useColorModeValue("teal.500", "teal.300")}
          />
          <Input
            ref={lastNameRef}
            placeholder="Last Name"
            bg={inputBg}
            color={textColor}
            border="1px solid"
            borderColor={useColorModeValue("gray.300", "gray.600")}
            isRequired
            focusBorderColor={useColorModeValue("teal.500", "teal.300")}
          />
        </Flex>

        <Input
          ref={phoneRef}
          placeholder="Phone Number"
          type="tel"
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.600")}
          isRequired
          focusBorderColor={useColorModeValue("teal.500", "teal.300")}
        />
        <Input
          ref={emailRef}
          placeholder="Your Email"
          type="email"
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.600")}
          isRequired
          focusBorderColor={useColorModeValue("teal.500", "teal.300")}
        />
        <Textarea
          ref={messageRef}
          placeholder="Your Message"
          bg={inputBg}
          color={textColor}
          border="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.600")}
          resize="none"
          isRequired
          focusBorderColor={useColorModeValue("teal.500", "teal.300")}
        />
        <Button
          colorScheme="teal"
          size="md"
          alignSelf="center"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
}

export default ContactMe;
