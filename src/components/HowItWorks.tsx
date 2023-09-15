import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";

function HowItWorks({
  heading,
  subHeading,
  price,
  perks,
  button,
}: {
  heading: string;
  subHeading: string;
  price: number;
  perks: string;
  button: string;
}) {
  return (
    <Container maxW={1300}>
      <Box className="card">
        <Box className="card-heading">
          <Box>
            <Heading>{heading}</Heading>
            <Heading>{subHeading}</Heading>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default HowItWorks;
