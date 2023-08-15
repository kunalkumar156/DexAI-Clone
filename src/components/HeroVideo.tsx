import { AspectRatio, Box, Container } from "@chakra-ui/react";
import React from "react";

function HeroVideo() {
  return (
    <Container
      mb="5rem"
      maxW="100%"
      p={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        borderRadius="30px"
        overflow="hidden"
        width="95%"
        position="relative"
      >
        <AspectRatio ratio={16 / 9}>
          <video
            title="naruto"
            src="https://tf-dexaireactjs.vercel.app/assets/videos/video_01.mp4"
            controls={false}
            autoPlay
            loop
          />
        </AspectRatio>
      </Box>
    </Container>
  );
}

export default HeroVideo;
