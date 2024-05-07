import { Container, VStack, Text, Heading, Box, List, ListItem, ListIcon, Image } from "@chakra-ui/react";
import { FaCheckCircle, FaTools, FaTruckMoving } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl" textAlign="center">
          Engineering Submittal & Method Statement
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Mobilization Plan for Dismantling Light Poles
        </Text>
        <Image src="https://images.unsplash.com/photo-1702226516747-39c54ed966a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd2l0aCUyMGxpZ2h0JTIwcG9sZXN8ZW58MHx8fHwxNzE1MDgyMDg4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Construction Site with Light Poles" borderRadius="md" />
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            1. Objective
          </Heading>
          <Text mt={2}>The objective of this method statement is to outline the procedures for the safe dismantling and transportation of light poles from the site.</Text>
        </Box>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            2. Scope of Work
          </Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Inspection and assessment of existing light poles.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Preparation of equipment and materials required for dismantling.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Dismantling of light poles using appropriate tools and machinery.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Safe loading and securing of dismantled poles onto transport vehicles.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Transportation of poles to designated storage or disposal sites.
            </ListItem>
          </List>
        </Box>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            3. Equipment and Tools
          </Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaTools} color="orange.500" />
              Mobile cranes and hoists
            </ListItem>
            <ListItem>
              <ListIcon as={FaTools} color="orange.500" />
              Hand tools and power tools
            </ListItem>
            <ListItem>
              <ListIcon as={FaTools} color="orange.500" />
              Safety harnesses and personal protective equipment (PPE)
            </ListItem>
            <ListItem>
              <ListIcon as={FaTools} color="orange.500" />
              Transport vehicles and securing materials
            </ListItem>
          </List>
        </Box>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            4. Safety Measures
          </Heading>
          <Text mt={2}>All operations will be conducted in accordance with the local safety regulations and company safety policies to ensure the safety of all personnel involved.</Text>
        </Box>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            5. Transportation and Handling
          </Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaTruckMoving} color="blue.500" />
              Ensure that all loads are evenly distributed and securely fastened.
            </ListItem>
            <ListItem>
              <ListIcon as={FaTruckMoving} color="blue.500" />
              Follow designated routes to minimize transit time and reduce risk of accidents.
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
