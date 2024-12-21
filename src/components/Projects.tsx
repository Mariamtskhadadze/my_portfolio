import { Box, SimpleGrid, Text, Link, Image } from "@chakra-ui/react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description 1",
      image: "/path/to/image1.jpg",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Description 2",
      image: "/path/to/image2.jpg",
      link: "#",
    },
  ];

  return (
    <Box id="projects" py={10} px={5}>
      <Text fontSize="2xl" mb={5} textAlign="center">
        Projects
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} padding={5}>
        {projects.map((project, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={project.image} alt={project.title} />
            <Box p={5}>
              <Text fontWeight="bold">{project.title}</Text>
              <Text>{project.description}</Text>
              <Link href={project.link} color="teal.500" isExternal>
                View Project
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
