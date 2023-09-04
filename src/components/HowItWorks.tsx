// components/CardContainer.js
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Card = ({ title, options }: { title: "srting"; options: "string" }) => (
  <Box
    border="1px solid white"
    p={4}
    borderRadius="md"
    bg="transparent"
    color="white"
    maxW="300px"
    m={4}
  >
    <Heading as="h2" size="md" mb={2}>
      {title}
    </Heading>
    <Box>
      {options.map((option, index) => (
        <Text
          key={index}
          mb={1}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {option}
        </Text>
      ))}
    </Box>
    <Button colorScheme="teal" mt={4}>
      Button
    </Button>
  </Box>
);

const CardContainer = () => {
  const cards = [
    {
      title: "Card 1",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
        "Option 6",
        "Option 7",
        "Option 8",
        "Option 9",
        "Option 10",
      ],
    },
    {
      title: "Card 2",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
        "Option 6",
        "Option 7",
        "Option 8",
        "Option 9",
        "Option 10",
      ],
    },
    {
      title: "Card 3",
      options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
        "Option 6",
        "Option 7",
        "Option 8",
        "Option 9",
        "Option 10",
      ],
    },
  ];

  return (
    <Box maxW="1300px" mx="auto" p={4} display="flex" flexWrap="wrap">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </Box>
  );
};

export default CardContainer;
