import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Input,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import React from "react";
import { useState } from "react";

function StyledIcon({ IconComponent }: { IconComponent: React.ComponentType }) {
  const [hovered, setHovered] = useState(false);

  const iconStyles = {
    display: "inline-flex",
    background: "transparent",
  };

  return (
    <Box
      width="40px"
      height="40px"
      display="flex"
      alignItems="center"
      borderRadius="50%"
      fontSize="14px"
      justifyContent="center"
      textAlign="center"
      marginRight="5px"
      color={hovered ? "#6721FF" : "white"}
      background={hovered ? "#6721FF" : "#0D0126"}
      transition="transform 0.5s ease"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={iconStyles}>
        <IconComponent style={iconStyles} />
      </div>
    </Box>
  );
}

function FasterAi() {
  return (
    <>
      <Container maxW={1300}>
        <Flex gap={24}>
          {/* Left section */}
          <Box width="35%">
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

          {/*Right side - Nav section */}

          <Box width="60%">
            <Flex alignItems="center">
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

            {/* Right side - box section */}

            <Box
              background="linear-gradient(89.78deg, rgba(200 189 255 / 20%) -31.69%, rgba(186 166 255 / 20%) -22.78%, rgba(103 33 255 / 20%) 27.93%, rgba(0 203 255 / 20%) 99.79%)"
              borderRadius="30px"
              border="1px solid rgba(255 255 255 / 20%)"
              padding="30px 40px"
              width="60%"
              position="relative"
            >
              {/* Absolute box */}
              <Box
                position="absolute"
                background="#270A5F"
                borderRadius="30px"
                border="1px solid rgba(255 255 255 / 20%)"
                padding="30px 40px"
                zIndex="10"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#6721FF",
                    color: "white",
                    borderRadius: "5px",
                    fontSize: "18px",
                    marginBottom: "20px",
                    fontWeight: 900,
                  }}
                >
                  <FaHome
                    style={{
                      background: "transparent",
                      fontSize: "20px",
                    }}
                  />
                </div>
                <Text background="transparent">
                  Meta description: Unlock the power of AI to automate your
                  business with Since AI. Our suite of AI-powered solutions can
                  help streamline your operations and increase efficiency.
                </Text>
                <Box display="flex" background={"transparent"}>
                  <StyledIcon IconComponent={FaHome} />
                  <StyledIcon IconComponent={FaHome} />
                  <StyledIcon IconComponent={FaHome} />
                  <StyledIcon IconComponent={FaHome} />
                  <StyledIcon IconComponent={FaHome} />
                </Box>
              </Box>

              <Box mb="4" background="transparent">
                <Text
                  bg="transparent"
                  fontWeight="600"
                  fontSize="16px"
                  mb="0.5rem"
                  marginTop="1.5rem"
                >
                  Keywords
                </Text>
                <Input
                  fontSize="14px"
                  bg="rgba(255, 255, 255, 0.12)"
                  border="1px solid rgba(255, 255, 255, 0.12)"
                  placeholder="AI 2023"
                  mb="10px"
                  _hover={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}
                  _focus={{
                    outline: "none",
                    boxShadow: "none",
                  }}
                />

                <Text
                  bg="transparent"
                  fontWeight="600"
                  fontSize="16px"
                  mb="0.5rem"
                >
                  Creativity
                </Text>
                <Slider
                  aria-label="slider-ex-4"
                  defaultValue={30}
                  bg="transparent"
                >
                  <SliderTrack bg="#6721ff">
                    <SliderFilledTrack bg="#6721ff" />
                  </SliderTrack>
                  <SliderThumb boxSize={4} bg="#6721FF">
                    <Box />
                  </SliderThumb>
                </Slider>
              </Box>

              <Flex alignItems="center" background="transparent" gap={7}>
                <Box width="25%" bg="transparent">
                  <Text
                    bg="transparent"
                    fontWeight="600"
                    fontSize="16px"
                    mb="0.5rem"
                  >
                    Language
                  </Text>
                  <Input
                    bg="rgba(255, 255,   <Box> 255, 0.12)"
                    fontSize="14px"
                    border="1px solid rgba(255, 255, 255, 0.12)"
                    placeholder="Swedish"
                    mb="10px"
                    _hover={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}
                    _focus={{
                      outline: "none",
                      boxShadow: "none",
                    }}
                  />
                </Box>
                <Box background="transparent">
                  <Text
                    bg="transparent"
                    fontWeight="600"
                    fontSize="16px"
                    mb="0.5rem"
                  >
                    Language
                  </Text>
                  <Input
                    fontSize="14px"
                    bg="rgba(255, 255, 255, 0.12)"
                    border="1px solid rgba(255, 255, 255, 0.12)"
                    placeholder="Professional"
                    mb="10px"
                    _hover={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}
                    _focus={{
                      outline: "none",
                      boxShadow: "none",
                    }}
                  />
                </Box>
              </Flex>

              {/* Button */}
              <button className="gradient-button btn-1 card-button">
                Generate
                <RiArrowRightSLine
                  style={{
                    background: "transparent",
                    fontSize: "20px",
                  }}
                />
              </button>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default FasterAi;
