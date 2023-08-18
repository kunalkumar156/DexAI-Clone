import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  background,
} from "@chakra-ui/react";
import React from "react";

function FasterAi() {
  return (
    <>
      <Container maxW={1300}>
        <Flex>
          <Box width="40%">
            <Heading
              fontWeight="700"
              fontSize="60px"
              letterSpacing="-0.01em"
              mb="2rem"
            >
              AI Does it faster & better.
            </Heading>
            <Text
              width="100%"
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

          <Box width="60%">
            <Flex justifyContent="center" alignItems="center">
              <Box
                background="linear-gradient(89.78deg, rgba(200 189 255 / 20%) -31.69%, rgba(186 166 255 / 20%) -22.78%, rgba(103 33 255 / 20%) 27.93%, rgba(0 203 255 / 20%) 99.79%)"
                borderRadius="10px"
                border="1px solid rgba(255 255 255 / 20%)"
                padding="10px 30px"
                marginBottom="60px"
              >
                <Button
                  className="simple-button"
                  bg="transparent"
                  color="white"
                  borderRadius="10px"
                  fontWeight="600"
                  fontSize="15px"
                  padding="6px 15px"
                  _hover={{ background: "#6721FF" }}
                  onClick={{ background: "#6721ff" }}
                >
                  Website
                </Button>

                <Button
                  className="simple-button"
                  bg="transparent"
                  color="white"
                  borderRadius="10px"
                  fontWeight="600"
                  fontSize="15px"
                  padding="6px 15px"
                  _hover={{ background: "#6721FF" }}
                >
                  Social Media
                </Button>

                <Button
                  className="simple-button"
                  bg="transparent"
                  color="white"
                  borderRadius="10px"
                  fontWeight="600"
                  fontSize="15px"
                  padding="6px 15px"
                  _hover={{ background: "#6721FF" }}
                >
                  Emails
                </Button>

                <Button
                  className="simple-button"
                  bg="transparent"
                  color="white"
                  borderRadius="10px"
                  fontWeight="600"
                  fontSize="15px"
                  padding="6px 15px"
                  _hover={{ background: "#6721FF" }}
                >
                  Code
                </Button>

                <Button
                  className="simple-button"
                  bg="transparent"
                  color="white"
                  borderRadius="10px"
                  fontWeight="600"
                  fontSize="15px"
                  padding="6px 15px"
                  _hover={{ background: "#6721FF" }}
                >
                  Art
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default FasterAi;
