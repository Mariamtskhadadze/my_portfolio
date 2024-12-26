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
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Mobile Menu Icon */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Toggle Navigation"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* "My Portfolio" Text and Navigation Links */}
        <HStack spacing={4} alignItems={"center"}>
          {/* Text: My Portfolio with the desired color */}
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

        {/* Language Toggle and Dark Mode */}
        <HStack spacing={2} alignItems={"center"}>
          {/* Language Toggle */}
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

          {/* Dark Mode Toggle */}
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
        <Box pb={4} display={{ md: "none" }}>
          <HStack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <Link key={link.name} href={link.href} px={2} py={1}>
                {t(link.name)}
              </Link>
            ))}
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default NavigationBar;
