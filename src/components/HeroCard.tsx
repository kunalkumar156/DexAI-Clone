import {
  Box,
  Flex,
  Heading,
  Text,
  ChakraProvider,
  Container,
} from "@chakra-ui/react";
import React from "react";

function HeroCard({ heading, content }: { heading: string; content: string }) {
  return (
    <Box
      border="1px solid rgba(255, 255, 255, 0.12)"
      filter="drop-shadow(0px 42px 76px #00042B)"
      borderRadius="10px"
      bg="transparent"
      padding="40px 30px"
      marginBottom="30px"
      width="30%"
    >
      <Heading
        bgGradient="linear-gradient(87.22deg, #C8BDFF -1.82%, #BAA6FF 5.99%, #6721FF 50.47%, #00CBFF 100.5%)"
        bgClip="text"
        textAlign="center"
        fontSize="55px"
        marginBottom="25px"
        mb={2}
        textTransform="uppercase"
      >
        {heading}
      </Heading>
      <Text fontWeight="400" textAlign="center" marginBottom="15px">
        {content}
      </Text>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Container maxW={1300} mb="4rem">
        <Flex justify="center" gap="1.5rem">
          <HeroCard heading="3Days" content="Average Saved / Week" />
          <HeroCard heading="$400000" content="Trained AI Model" />
          <HeroCard heading="$80+" content="Powerful AI Business Tools" />
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
