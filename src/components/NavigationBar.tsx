import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  useColorMode,
  Link,
  Circle,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

const Links = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "blogs", href: "/blogs" },
  { name: "contact", href: "/contact" },
];

const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation();

  // Set color based on color mode
  const textColor = colorMode === "light" ? "teal.600" : "teal.300"; // Color for text
  const bgColor = colorMode === "light" ? "gray.100" : "gray.900"; // Background color

  return (
    <Box bg={bgColor} px={4}>
      <Flex
        h={16}
        alignItems="center" // Ensures all elements are vertically centered
        justifyContent="space-between" // Spreads out elements across navbar
      >
        {/* Hamburger Icon */}
        <IconButton
          size={"lg"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ base: "block", md: "none" }} // Only show on small screens
          onClick={isOpen ? onClose : onOpen}
        />

        {/* "My Portfolio" Text and Navigation Links */}
        <HStack
          spacing={6} // Increased spacing between "My Portfolio" and links
          alignItems="center"
          flex="1" // Ensures this section takes up available space
        >
          {/* Text: My Portfolio */}
          <Text fontSize="xl" fontWeight="bold" color={textColor}>
            {t("myPortfolio")}
          </Text>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                px={2}
                py={1}
                color={textColor}
              >
                {t(link.name)}
              </Link>
            ))}
          </HStack>
        </HStack>

        {/* Language and Dark Mode Toggle */}
        <HStack spacing={2} alignItems="center">
          <Circle
            size="28px"
            bg={i18n.language === "en" ? "black" : "transparent"}
            color={i18n.language === "en" ? "white" : textColor}
            border={`1px solid ${textColor}`}
            cursor="pointer"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </Circle>
          <Circle
            size="28px"
            bg={i18n.language === "ka" ? "black" : "transparent"}
            color={i18n.language === "ka" ? "white" : textColor}
            border={`1px solid ${textColor}`}
            cursor="pointer"
            onClick={() => i18n.changeLanguage("ka")}
          >
            GE
          </Circle>

          <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="sm"
            variant="ghost"
          />
        </HStack>
      </Flex>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <Box
          pb={4}
          display={{ md: "none" }} // Only show on small screens
          bg={bgColor}
          w="100%" // Full width for mobile
          boxShadow="md"
        >
          <VStack as={"nav"} spacing={4} align="flex-start">
            {Links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                px={2}
                py={1}
                color={textColor}
              >
                {t(link.name)}
              </Link>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default NavigationBar;
