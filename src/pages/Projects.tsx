// import { Box, SimpleGrid, Text, Link, Image } from "@chakra-ui/react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Project 1",
//       description: "Description 1",
//       image: "/path/to/image1.jpg",
//       link: "#",
//     },
//     {
//       title: "Project 2",
//       description: "Description 2",
//       image: "/path/to/image2.jpg",
//       link: "#",
//     },
//   ];

//   return (
//     <Box id="projects" py={10} px={5}>
//       <Text fontSize="2xl" mb={5} textAlign="center">
//         Projects
//       </Text>
//       <SimpleGrid columns={{ base: 1, md: 2 }} padding={5}>
//         {projects.map((project, index) => (
//           <Box
//             key={index}
//             borderWidth="1px"
//             borderRadius="lg"
//             overflow="hidden"
//           >
//             <Image src={project.image} alt={project.title} />
//             <Box p={5}>
//               <Text fontWeight="bold">{project.title}</Text>
//               <Text>{project.description}</Text>
//               <Link href={project.link} color="teal.500" isExternal>
//                 View Project
//               </Link>
//             </Box>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default Projects;

import { Box, Heading, Text, Stack, Link } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Box p={6}>
      <Heading>Projects</Heading>
      <Stack mt={4} spacing={4}>
        <Box>
          <Heading size="md">Project 1</Heading>
          <Text>A brief description of your project.</Text>
          <Link href="#" color="teal.500" isExternal>
            View Project
          </Link>
        </Box>
        <Box>
          <Heading size="md">Project 2</Heading>
          <Text>A brief description of your project.</Text>
          <Link href="#" color="teal.500" isExternal>
            View Project
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
