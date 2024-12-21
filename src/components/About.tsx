import { Box, Text, VStack, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" py={10} px={5}>
      <VStack padding={5} textAlign="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/path/to/your-photo.jpg"
          alt="Profile"
        />
        <Text fontSize="2xl" fontWeight="bold">
          Hi, I'm Mariam Tskhadadze!
        </Text>
        <Text>
          Front-end developer passionate about building responsive and
          user-friendly web applications.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
