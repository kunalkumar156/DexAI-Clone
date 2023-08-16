import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import { BiBrain } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import React from "react";

function StartWriting({
  IconComponent, // Rename to IconComponentComponent
  heading,
  content,
  link,
  text,
}: {
  IconComponent: React.ComponentType; // Change to React.ComponentType
  heading: string;
  content: string;
  link: string;
  text: string;
}) {
  return (
    <Box className="writing-card">
      <Box className="writing-card-svg">
        <IconComponent />
      </Box>
      <Heading fontSize="20px" marginBottom="10px" background="transparent">
        {heading}
      </Heading>
      <Text
        marginBottom="17px"
        fontSize="15px"
        color="#C8B8E8"
        lineHeight="1.75"
        fontWeight="400"
        background="transparent"
        width="70%"
      >
        {content}
      </Text>
      <Link href={link} isExternal fontSize="16px">
        <Text
          background="transparent"
          _hover={{ color: "#0d6efd", textDecoration: "none" }}
        >
          {text}
        </Text>
      </Link>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Container maxW={1300} mb="4rem">
        <Heading
          fontWeight="700"
          fontSize="60px"
          letterSpacing="-0.01em"
          textAlign="center"
          mb="5rem"
        >
          Start writing <span>10x faster</span> with AI
        </Heading>

        <Box display="flex" justifyContent="center" gap="30px" mb="2rem">
          <StartWriting
            key="brain"
            IconComponent={BiBrain}
            heading="
            The GPT-3.5 language"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try Gpt-3.5 language"
          />
          <StartWriting
            key="chart"
            IconComponent={FaChartLine}
            heading="
            Grow with the use of AI"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try use of AI"
          />
          <StartWriting
            key="lightbulb"
            IconComponent={HiOutlineLightBulb}
            heading="Optimized for conversions"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try conversions"
          />
        </Box>

        <Box display="flex" justifyContent="center" gap="30px">
          <StartWriting
            key="globe"
            IconComponent={FaGlobe}
            heading="Supports 26 languages"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try support languages"
          />
          <StartWriting
            key="user"
            IconComponent={FaUserFriends}
            heading="
            Streamline collaboration"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try streamline"
          />
          <StartWriting
            key="settings"
            IconComponent={FiSettings}
            heading="Powerful settings"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try powerful settings"
          />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
