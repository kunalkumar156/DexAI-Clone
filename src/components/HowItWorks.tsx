import { Container, Box, Heading } from "@chakra-ui/react";
import React from "react";

function HowItWorks() {
  return (
    <>
      <Container maxW={1300} pt="10rem" pb="10rem">
        <Heading
          fontWeight="700"
          fontSize="60px"
          letterSpacing="-0.01em"
          mb="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          AI Does it faster & better.
        </Heading>
      </Container>
    </>
  );
}

export default HowItWorks;
