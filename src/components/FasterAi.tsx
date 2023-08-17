import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function FasterAi() {
  return (
    <>
      <Container maxW={1300}>
        <Flex>
          <Box>
            <Heading
              width="40%"
              fontWeight="700"
              fontSize="60px"
              letterSpacing="-0.01em"
              mb="2rem"
            >
              AI Does it faster & better.
            </Heading>
            <Text
              width="30%"
              margin="0 auto 30px"
              fontSize="18px"
              color="#C8B8E8"
              textAlign="left"
            >
              Have a look at one of 60+ available tools included in your SinCode
              AI account. Just fill out the keywords and Marve will generate
              your next content for you.
            </Text>
          </Box>
          <Box>
            <Text>i am right side of the section</Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default FasterAi;
