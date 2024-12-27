import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const bgColor = colorMode === "dark" ? "gray.900" : "gray.50";
  const textColor = colorMode === "dark" ? "white" : "black";
  const headingColor = colorMode === "dark" ? "teal.400" : "teal.600";
  const buttonColorScheme = colorMode === "dark" ? "teal" : "blue";
  const secondaryButtonColorScheme = colorMode === "dark" ? "blue" : "teal";

  return (
    <Box
      bg={bgColor}
      py={16}
      px={6}
      textAlign="center"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color={textColor}
    >
      {/* Main Content */}
      <Box>
        <Heading as="h1" size="3xl" mb={6} color={headingColor}>
          {t("homepage.welcome")}
        </Heading>
        <Text
          fontSize="2xl"
          color={colorMode === "dark" ? "gray.300" : "gray.700"}
          mb={12}
        >
          {t("homepage.intro", { name: "Mariam Tskhadadze" })}
        </Text>
        <HStack justify="center" spacing={4}>
          <Button
            colorScheme={buttonColorScheme}
            size="lg"
            as="a"
            href="/projects"
          >
            {t("homepage.viewProjects")}
          </Button>
          {/* View CV Button */}
          <Button
            size="lg"
            colorScheme={secondaryButtonColorScheme}
            as="a"
            href="/cv/Mariam_Tskhadadze_CV.pdf"
            target="_blank" // Open in a new tab
          >
            {t("homepage.viewCV")}
          </Button>
        </HStack>
      </Box>

      {/* Skills Section */}
      <VStack mt={16} spacing={4}>
        <Text fontSize="xl" color={headingColor} fontWeight="bold">
          {t("homepage.techStack")}
        </Text>
        <HStack spacing={6}>
          {["HTML", "CSS", "JavaScript", "React", "Chakra UI", "Git"].map(
            (tech) => (
              <Text
                key={tech}
                fontSize="lg"
                color={colorMode === "dark" ? "gray.300" : "gray.700"}
              >
                {t(`homepage.tech.${tech.toLowerCase()}`)}
              </Text>
            )
          )}
        </HStack>
      </VStack>

      {/* New Tagline */}
      <Box mt={16}>
        <Text fontSize="lg" color={headingColor} fontWeight="bold">
          {t("homepage.tagline")}
        </Text>
      </Box>

      {/* Footer */}
      <Text
        fontSize="sm"
        color={colorMode === "dark" ? "gray.500" : "gray.600"}
        mt="auto"
        mb={4}
      >
        © {new Date().getFullYear()} {t("homepage.name")}.{" "}
        {t("homepage.rights")}
      </Text>
    </Box>
  );
};

export default HomePage;
