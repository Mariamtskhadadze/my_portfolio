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
import { FiMail, FiPhone, FiMapPin, FiGithub } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();
  const bg = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box bg={bg} minH="100vh" py={10} color={textColor}>
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
          {t("aboutMe.title")}
        </Heading>
        <Text fontSize="lg" lineHeight="1.7" textAlign="center">
          {t("aboutMe.description")}
        </Text>

        <VStack spacing={6} align="flex-start" w="full">
          <HStack spacing={4} fontSize="lg" lineHeight="1.7">
            <Icon as={FiMail} color="teal.500" />
            <Link href={`mailto:${t("aboutMe.email")}`} color="teal.500">
              {t("aboutMe.email")}
            </Link>
          </HStack>

          <HStack spacing={4} fontSize="lg" lineHeight="1.7">
            <Icon as={FiGithub} color="teal.500" />
            <Link
              href={`https://${t("aboutMe.github")}`}
              color="teal.500"
              isExternal
            >
              {t("aboutMe.github")}
            </Link>
          </HStack>

          <HStack spacing={4} fontSize="lg" lineHeight="1.7">
            <Icon as={FiPhone} color="teal.500" />
            <Link href={`tel:${t("aboutMe.phone")}`} color="teal.500">
              {t("aboutMe.phone")}
            </Link>
          </HStack>

          <HStack spacing={4} fontSize="lg" lineHeight="1.7">
            <Icon as={FiMapPin} color="teal.500" />
            <Text>{t("aboutMe.location")}</Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default AboutMe;
