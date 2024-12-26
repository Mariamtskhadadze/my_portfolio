import React, { useState } from "react";
import {
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Link,
  Flex,
  Card,
  CardBody,
} from "@chakra-ui/react";

// Import images for the first project
import Screenshot1 from "../assets/images/first_project/Screenshot_1.png";
import Screenshot2 from "../assets/images/first_project/Screenshot_2.png";
import Screenshot3 from "../assets/images/first_project/Screenshot_3.png";
import Screenshot4 from "../assets/images/first_project/Screenshot_4.png";

// Import image for the second project
import ProjectScreenshot1 from "../assets/images/second_project/Second_Project_1.jpg";
import ProjectScreenshot2 from "../assets/images/second_project/Second_Project_2.jpg";
import ProjectScreenshot3 from "../assets/images/second_project/Second_Project_3.jpg";

import ThirdProjectScreenshot1 from "../assets/images/third_project/Third_Project_1.jpg";
import ThirdProjectScreenshot2 from "../assets/images/third_project/Third_Project_2.jpg";
import ThirdProjectScreenshot3 from "../assets/images/third_project/Third_Project_3.jpg";

const Projects: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
  const [selectedImage, setSelectedImage] = useState<string>(""); // State to track which image is selected

  // Function to open the modal and set the selected image
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(""); // Reset the selected image
  };

  return (
    <Container maxW="container.lg" p={8} centerContent>
      {/* First Project */}
      <VStack align="center" spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center" color="teal.500">
          Construction Page
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="lg" color="gray.600">
          This is a brief description of the project, where I used HTML and CSS
          to build it. It's a construction-themed project with various features
          showcasing layout and design.
        </Text>
      </VStack>

      {/* First Project Screenshot Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={6}
        mt={10}
        justifyItems="center"
      >
        <Image
          src={Screenshot1}
          alt="Screenshot 1"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          onClick={() => openModal(Screenshot1)}
        />
        <Image
          src={Screenshot2}
          alt="Screenshot 2"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          onClick={() => openModal(Screenshot2)}
        />
        <Image
          src={Screenshot3}
          alt="Screenshot 3"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          onClick={() => openModal(Screenshot3)}
        />
        <Image
          src={Screenshot4}
          alt="Screenshot 4"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          onClick={() => openModal(Screenshot4)}
        />
      </SimpleGrid>

      {/* Modal to display selected image */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Image
              src={selectedImage}
              alt="Selected Screenshot"
              boxSize="full"
              objectFit="contain"
              borderRadius="md"
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Divider between projects */}
      <Box h="10" />

      {/* Second Project */}
      <VStack align="center" spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center" color="teal.500">
          Games Page
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="lg" color="gray.600">
          This is my second project, using React with TypeScript and Chakra UI.
          It’s hosted on Vercel, and showcases interactive elements and smooth
          animations.
        </Text>
      </VStack>

      {/* Second Project Screenshot Section */}
      <Box mt={8} textAlign="center">
        <SimpleGrid
          columns={{ base: 1, md: 3 }} // 1 column on small screens, 3 on larger screens
          spacing={6} // Adjust the space between images
          justifyItems="center" // Center the images
        >
          <Image
            src={ProjectScreenshot1}
            alt="Second Project Screenshot"
            borderRadius="md"
            boxSize="300px"
            objectFit="cover"
            cursor="pointer"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => openModal(ProjectScreenshot1)}
          />
          <Image
            src={ProjectScreenshot2}
            alt="Second Project Screenshot"
            borderRadius="md"
            boxSize="300px"
            objectFit="cover"
            cursor="pointer"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => openModal(ProjectScreenshot2)}
          />
          <Image
            src={ProjectScreenshot3}
            alt="Second Project Screenshot"
            borderRadius="md"
            boxSize="300px"
            objectFit="cover"
            cursor="pointer"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => openModal(ProjectScreenshot3)}
          />
        </SimpleGrid>
      </Box>

      {/* Second Project Links Section with Frames */}
      <Flex mt={12} justifyContent="center" gap={8}>
        <Card
          variant="elevated"
          boxShadow="lg"
          maxW="sm"
          borderRadius="xl"
          transition="all 0.3s ease"
          _hover={{ boxShadow: "2xl", transform: "scale(1.05)" }}
        >
          <CardBody>
            <Link
              href="https://game-arcadia.vercel.app/"
              color="teal.500"
              fontWeight="bold"
              fontSize="xl"
              isExternal
            >
              Live Demo
            </Link>
          </CardBody>
        </Card>

        <Card
          variant="elevated"
          boxShadow="lg"
          maxW="sm"
          borderRadius="xl"
          transition="all 0.3s ease"
          _hover={{ boxShadow: "2xl", transform: "scale(1.05)" }}
        >
          <CardBody>
            <Link
              href="https://github.com/Mariamtskhadadze/game-arcadia.git"
              color="teal.500"
              fontWeight="bold"
              fontSize="xl"
              isExternal
            >
              View Code
            </Link>
          </CardBody>
        </Card>
      </Flex>

      {/* Third Project */}
      <VStack align="center" spacing={6} mt={12}>
        <Heading as="h1" size="2xl" textAlign="center" color="teal.500">
          Store Page
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="lg" color="gray.600">
          This is a description of the third project, with beautiful visuals and
          animations.
        </Text>
      </VStack>

      {/* Third Project Screenshot Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
        mt={8}
        justifyItems="center"
      >
        <Image
          src={ThirdProjectScreenshot1}
          alt="Third Project Screenshot 1"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          onClick={() => openModal(ThirdProjectScreenshot1)}
        />
        <Image
          src={ThirdProjectScreenshot2}
          alt="Third Project Screenshot 2"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          onClick={() => openModal(ThirdProjectScreenshot2)}
        />
        <Image
          src={ThirdProjectScreenshot3}
          alt="Third Project Screenshot 3"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          onClick={() => openModal(ThirdProjectScreenshot3)}
        />
      </SimpleGrid>

      {/* Modal to display selected image */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Image
              src={selectedImage}
              alt="Selected Screenshot"
              boxSize="full"
              objectFit="contain"
              borderRadius="md"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Projects;
