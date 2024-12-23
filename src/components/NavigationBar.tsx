import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

const Links = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Mobile Menu Icon */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Toggle Navigation"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Logo and Navigation Links */}
        <HStack spacing={8} alignItems={"center"}>
          <Box
            fontWeight="bold"
            color={useColorModeValue("teal.600", "teal.300")}
          >
            My Portfolio
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Link key={link.name} href={link.href} px={2} py={1}>
                {link.name}
              </Link>
            ))}
          </HStack>
        </HStack>

        {/* Dark Mode Toggle */}
        <IconButton
          aria-label="Toggle Dark Mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Flex>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <HStack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <Link key={link.name} href={link.href} px={2} py={1}>
                {link.name}
              </Link>
            ))}
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default NavigationBar;
