import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

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
      "Learn the fundamentals of responsive web design and how to create layouts that adapt beautifully to different screen sizes. Responsive web design ensures that your content is accessible and visually appealing, whether viewed on a mobile device, tablet, or desktop.",
    date: "December 20, 2024",
    link: "/blog/responsive-web-design",
  },
  {
    id: 2,
    title: "JavaScript ES6 Features You Should Know",
    description:
      "Master the most essential features of JavaScript ES6. From arrow functions to template literals and destructuring, ES6 introduces powerful tools to make your code more concise, efficient, and readable.",
    date: "December 15, 2024",
    link: "/blog/javascript-es6-features",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which?",
    description:
      "Understand the differences between CSS Grid and Flexbox. Learn when to use each layout system to create responsive and flexible designs, and determine which one best suits the specific needs of your project.",
    date: "December 10, 2024",
    link: "/blog/css-grid-vs-flexbox",
  },
];

const BlogsPage = () => {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");

  const [expandedBlog, setExpandedBlog] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setExpandedBlog((prevId) => (prevId === id ? null : id));
  };

  return (
    <Box py={10} px={6}>
      <Heading
        as="h1"
        size="2xl"
        mb={8}
        textAlign="center"
        color={useColorModeValue("teal.500", "teal.200")}
      >
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
              <Text mb={4}>{blog.description.slice(0, 100)}...</Text>
              {expandedBlog === blog.id && (
                <Text>{blog.description.slice(100)}</Text>
              )}
              <Button
                onClick={() => toggleDescription(blog.id)}
                colorScheme="teal"
                mt={2}
              >
                {expandedBlog === blog.id ? "Show Less" : "Read More"}
              </Button>
            </Box>
          </Stack>
        ))}
      </VStack>
    </Box>
  );
};

export default BlogsPage;
