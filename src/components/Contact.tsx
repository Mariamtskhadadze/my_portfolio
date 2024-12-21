import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box id="contact" py={10} px={5}>
      <VStack padding={5} textAlign="center">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="teal">Send Message</Button>
      </VStack>
    </Box>
  );
};

export default Contact;
