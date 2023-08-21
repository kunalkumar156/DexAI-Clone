import { Container, Box, Heading } from "@chakra-ui/react";
import React from "react";

function HowItWorks() {
  return (
    <>
      <Container maxW={1300} pt="10rem">
        <Heading
          fontWeight="700"
          fontSize="60px"
          letterSpacing="-0.01em"
          textAlign="center"
          mb="5rem"
        >
          How it <span>works</span>
        </Heading>
      </Container>
    </>
  );
}

export default HowItWorks;
