import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";

function Hero() {
  return (
    <>
      <Container maxW={1300} mb="5rem">
        <Box>
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Text
              pt="4rem"
              fontSize="65px"
              width="90%"
              margin="0 auto 30px"
              textAlign="center"
              fontWeight="600"
            >
              Whatever You Want to ask - DEX.AI has the <span>Solutions</span>
            </Text>
            <Text
              width="63%"
              margin="0 auto 30px"
              fontSize="18px"
              color="#C8B8E8"
              textAlign="center"
            >
              Artificial intelligence makes it fast easy to create content for
              your blog, social media, website, and more! Rated 5/5 stars in
              3,000+ reviews.
            </Text>
          </Flex>
        </Box>

        <Flex justifyContent="center" gap={10}>
          <button className="gradient-button btn-1">
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

          <button className="gradient-button btn-1">
            how dex.ai work
            <FiArrowUpRight
              className="arrow"
              style={{
                background: "transparent",
                fontSize: "20px",
                transition: "transform 0.5s ease",
              }}
            />
          </button>
        </Flex>
      </Container>
    </>
  );
}

export default Hero;
