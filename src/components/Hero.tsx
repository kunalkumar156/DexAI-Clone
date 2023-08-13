import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";

function Hero() {
  return (
    <>
      <Container maxW={1300}>
        <Box>
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Text>Whatever You Want to ask - DEX.AI </Text>
            <Text>
              has the <span></span>
              Solutions
            </Text>
            <Text>
              Artificial intelligence makes it fast easy to create content for
              your blog, social media, website, and more! Rated 5/5 stars in
              3,000+ reviews.
            </Text>
          </Flex>
        </Box>

        <Flex justifyContent="center" gap={20}>
          <button className="gradient-button">
            start a free trial
            <FiArrowUpRight
              className="arrow"
              style={{
                background: "transparent",
                fontSize: "20px",
                transition: "transform 0.5s ease",
              }}
            />
          </button>

          <Button
            className="button"
            borderRadius={30}
            color="#fff"
            padding="24px 26px "
            textAlign="center"
            backgroundColor="transparent"
            _hover={{ backgroundColor: "transparent" }}
          >
            how dex.ai work
            <FiArrowUpRight
              className="arrow"
              style={{
                background: "transparent",
                fontSize: "20px",
                transition: "transform 0.5s ease",
              }}
            />
          </Button>
        </Flex>
      </Container>
    </>
  );
}

export default Hero;
