import { Box, Flex, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold">
          My Portfolio
        </Box>
        <Flex gap={4}>
          <Link href="#about" color="white">
            About
          </Link>
          <Link href="#projects" color="white">
            Projects
          </Link>
          <Link href="#contact" color="white">
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
