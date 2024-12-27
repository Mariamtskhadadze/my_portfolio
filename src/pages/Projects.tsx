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
import { useTranslation } from "react-i18next";

// Import images for each project
import Screenshot1 from "../assets/images/first_project/Screenshot_1.png";
import Screenshot2 from "../assets/images/first_project/Screenshot_2.png";
import Screenshot3 from "../assets/images/first_project/Screenshot_3.png";
import Screenshot4 from "../assets/images/first_project/Screenshot_4.png";

import ProjectScreenshot1 from "../assets/images/second_project/Second_Project_1.jpg";
import ProjectScreenshot2 from "../assets/images/second_project/Second_Project_2.jpg";
import ProjectScreenshot3 from "../assets/images/second_project/Second_Project_3.jpg";

import ThirdProjectScreenshot1 from "../assets/images/third_project/Third_Project_1.jpg";
import ThirdProjectScreenshot2 from "../assets/images/third_project/Third_Project_2.jpg";
import ThirdProjectScreenshot3 from "../assets/images/third_project/Third_Project_3.jpg";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Function to open the modal and set the selected image
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <Container maxW="container.lg" p={8} centerContent>
      {/* First Project */}
      <VStack align="center" spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center" color="teal.500">
          {t("aboutMe.projects.construction.title")}
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="lg" color="gray.600">
          {t("aboutMe.projects.construction.description")}
        </Text>
      </VStack>

      {/* First Project Screenshot Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={6}
        mt={10}
        justifyItems="center"
      >
        {[Screenshot1, Screenshot2, Screenshot3, Screenshot4].map(
          (image, index) => (
            <Image
              key={index}
              src={image}
              alt={`First Project Screenshot ${index + 1}`}
              borderRadius="md"
              boxSize="300px"
              objectFit="cover"
              cursor="pointer"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              onClick={() => openModal(image)}
            />
          )
        )}
      </SimpleGrid>

      <Box h="10" />

      {/* Second Project */}
      <VStack align="center" spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center" color="teal.500">
          {t("aboutMe.projects.games.title")}
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="lg" color="gray.600">
          {t("aboutMe.projects.games.description")}
        </Text>
      </VStack>

      {/* Second Project Screenshot Section */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        mt={10}
        justifyItems="center"
      >
        {[ProjectScreenshot1, ProjectScreenshot2, ProjectScreenshot3].map(
          (image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Second Project Screenshot ${index + 1}`}
              borderRadius="md"
              boxSize="300px"
              objectFit="cover"
              cursor="pointer"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              onClick={() => openModal(image)}
            />
          )
        )}
      </SimpleGrid>

      {/* Second Project Links Section */}
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
              {t("aboutMe.projects.games.liveDemo")}
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
              {t("aboutMe.projects.games.viewCode")}
            </Link>
          </CardBody>
        </Card>
      </Flex>

      <Box h="10" />

      {/* Third Project */}
      <VStack align="center" spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center" color="teal.500">
          {t("aboutMe.projects.store.title")}
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="lg" color="gray.600">
          {t("aboutMe.projects.store.description")}
        </Text>
      </VStack>

      {/* Third Project Screenshot Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
        mt={8}
        justifyItems="center"
      >
        {[
          ThirdProjectScreenshot1,
          ThirdProjectScreenshot2,
          ThirdProjectScreenshot3,
        ].map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Third Project Screenshot ${index + 1}`}
            borderRadius="md"
            boxSize="300px"
            objectFit="cover"
            cursor="pointer"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => openModal(image)}
          />
        ))}
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
