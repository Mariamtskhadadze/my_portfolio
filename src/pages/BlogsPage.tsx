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
import { useTranslation } from "react-i18next";

interface Blog {
  id: number;
  titleKey: string; // Use translation keys for titles
  descriptionKey: string; // Add translation keys for descriptions
  date: string;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    titleKey: "blog.responsiveWebDesignTitle", // Use translation key for title
    descriptionKey: "blog.responsiveWebDesignDescription", // Add translation key for description
    date: "20/12/2024",
    link: "/blog/responsive-web-design",
  },
  {
    id: 2,
    titleKey: "blog.javascriptES6FeaturesTitle", // Use translation key for title
    descriptionKey: "blog.javascriptES6FeaturesDescription", // Add translation key for description
    date: "15/12/2024",
    link: "/blog/javascript-es6-features",
  },
  {
    id: 3,
    titleKey: "blog.cssGridVsFlexboxTitle", // Use translation key for title
    descriptionKey: "blog.cssGridVsFlexboxDescription", // Add translation key for description
    date: "10/12/2024",
    link: "/blog/css-grid-vs-flexbox",
  },
];

const BlogsPage = () => {
  const { t } = useTranslation();
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
        {t("blogsPage.title")}
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
                {t(blog.titleKey)} {/* Use the titleKey here */}
              </Heading>
              <Text fontSize="sm" color={textColor} mb={2}>
                {t("blog.date")}: {blog.date}
              </Text>
              <Text mb={4}>{t(blog.descriptionKey).slice(0, 100)}...</Text>{" "}
              {/* Use the descriptionKey here */}
              {expandedBlog === blog.id && (
                <Text>{t(blog.descriptionKey).slice(100)}</Text>
              )}
              <Button
                onClick={() => toggleDescription(blog.id)}
                colorScheme="teal"
                mt={2}
              >
                {expandedBlog === blog.id
                  ? t("blogsPage.showLess")
                  : t("blogsPage.readMore")}
              </Button>
            </Box>
          </Stack>
        ))}
      </VStack>
    </Box>
  );
};

export default BlogsPage;
