import { Box, Container, Heading, Stack, Switch, Text } from "@chakra-ui/react";
import React from "react";

function Money() {
  return (
    <>
      <Container maxW={1300}>
        {" "}
        <Heading
          fontWeight="700"
          fontSize="60px"
          letterSpacing="-0.01em"
          mb="2rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Money well invested
        </Heading>
        <Box
          className="checkbox"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={5}
        >
          <Text>Yearly</Text>
          <Stack direction="row" color="#6721FF">
            <Switch colorScheme="purple" size="lg" />
          </Stack>
          <Text>Monthly</Text>
        </Box>
      </Container>
    </>
  );
}

export default Money;
