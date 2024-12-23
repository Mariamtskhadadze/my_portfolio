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
} from "@chakra-ui/react";

// Import images
import Screenshot1 from "../assets/images/Screenshot_1.png";
import Screenshot2 from "../assets/images/Screenshot_2.png";
import Screenshot3 from "../assets/images/Screenshot_3.png";
import Screenshot4 from "../assets/images/Screenshot_4.png";

const Project: React.FC = () => {
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
    <Container maxW="container.md" p={5} centerContent>
      {/* Heading Section */}
      <VStack align="center" spacing={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Project about construction
        </Heading>
        <Text fontSize="lg" textAlign="center">
          This is a brief description of the project, I used HTML and CSS to
          build it.
        </Text>
      </VStack>

      {/* Screenshot Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={4}
        mt={8}
        justifyItems="center"
      >
        <Image
          src={Screenshot1}
          alt="Screenshot 1"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          onClick={() => openModal(Screenshot1)} // Open modal with this image
        />
        <Image
          src={Screenshot2}
          alt="Screenshot 2"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          onClick={() => openModal(Screenshot2)} // Open modal with this image
        />
        <Image
          src={Screenshot3}
          alt="Screenshot 3"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          onClick={() => openModal(Screenshot3)} // Open modal with this image
        />
        <Image
          src={Screenshot4}
          alt="Screenshot 4"
          borderRadius="md"
          boxSize="300px"
          objectFit="cover"
          cursor="pointer"
          onClick={() => openModal(Screenshot4)} // Open modal with this image
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
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Project;
