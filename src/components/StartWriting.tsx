import {
  Box,
  Container,
  Heading,
  Icon,
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
  icon: IconComponent, // Rename to IconComponent
  heading,
  content,
  link,
  text,
}: {
  icon: React.ComponentType; // Change to React.ComponentType
  heading: string;
  content: string;
  link: string;
  text: string;
}) {
  return (
    <Box>
      <IconComponent boxSize="10px" color="blue.500" />{" "}
      {/* Use IconComponent */}
      <Heading fontSize="20px" marginBottom="10px">
        {heading}
      </Heading>
      <Text
        marginBottom="17px"
        fontSize="15px"
        color="#C8B8E8"
        lineHeight="1.75"
        fontWeight="400"
      >
        {content}
      </Text>
      <Link href={link} isExternal fontSize="16px">
        <Text>{text}</Text>
      </Link>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Container maxW={1300} mb="4rem">
        <Heading>
          Start writing <span>10x faster</span> with AI
        </Heading>

        <Box display="flex" justifyContent="center" gap="30px" mb="2rem">
          <StartWriting
            key="brain"
            icon={BiBrain}
            heading="
            The GPT-3.5 language"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try Gpt-3.5 language"
          />
          <StartWriting
            key="chart"
            icon={FaChartLine}
            heading="
            Grow with the use of AI"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try use of AI"
          />
          <StartWriting
            key="lightbulb"
            icon={HiOutlineLightBulb}
            heading="Optimized for conversions"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try conversions"
          />
        </Box>

        <Box display="flex" justifyContent="center" gap="30px">
          <StartWriting
            key="globe"
            icon={FaGlobe}
            heading="Supports 26 languages"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try support languages"
          />
          <StartWriting
            key="user"
            icon={FaUserFriends}
            heading="
            Streamline collaboration"
            content="Unlike anything you've experienced - unique and unimaginable capabilities."
            link="#"
            text="Try streamline"
          />
          <StartWriting
            key="settings"
            icon={FiSettings}
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
