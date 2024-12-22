import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

interface Blog {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Build a Responsive Website",
    description:
      "Learn the fundamentals of responsive web design to create beautiful, adaptive layouts.",
    date: "December 20, 2024",
    link: "/blog/responsive-web-design",
  },
  {
    id: 2,
    title: "JavaScript ES6 Features You Should Know",
    description:
      "Explore the most useful ES6 features that every JavaScript developer should master.",
    date: "December 15, 2024",
    link: "/blog/javascript-es6-features",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which?",
    description:
      "A comparison of CSS Grid and Flexbox to help you decide the best layout tool for your project.",
    date: "December 10, 2024",
    link: "/blog/css-grid-vs-flexbox",
  },
];

const BlogsPage = () => {
  // Use the hook at the top level
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box py={10} px={6}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Blogs
      </Heading>
      <VStack spacing={8}>
        {blogs.map((blog) => (
          <Stack
            key={blog.id}
            direction={{ base: "column", md: "row" }}
            spacing={8}
            p={5}
            borderWidth={1}
            borderRadius="lg"
            bg={bgColor}
            shadow="md"
            width="100%"
            maxW="800px"
          >
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                {blog.title}
              </Heading>
              <Text fontSize="sm" color={textColor} mb={2}>
                {blog.date}
              </Text>
              <Text mb={4}>{blog.description}</Text>
              <Button as="a" href={blog.link} colorScheme="teal">
                Read More
              </Button>
            </Box>
          </Stack>
        ))}
      </VStack>
    </Box>
  );
};

export default BlogsPage;
