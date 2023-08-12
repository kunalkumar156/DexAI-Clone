import {
  Button,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import React from "react";

function Nav() {
  return (
    <>
      <Container maxW={1300}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          py={4}
          bg="transparent"
          color="white"
        >
          {/* Logo */}
          <Link href="/">
            <Image src="https://tf-dexaireactjs.vercel.app/assets/img/logo/logo.png" />
          </Link>

          {/* Links */}

          <Flex py="4">
            <Link href="/">
              <Text>Home</Text>
            </Link>

            <Link href="#">
              <Text>About Us</Text>
            </Link>

            <Link href="#">
              <Text>Pages</Text>
            </Link>

            <Link href="#">
              <Text>News</Text>
            </Link>

            <Link href="#">
              <Text>Contacts</Text>
            </Link>
          </Flex>
          <Flex justifyContent="center">
            {/* language */}
            <Link>
              <Text>English</Text>
            </Link>

            {/* Sign Up Button */}
            <Button className="button" borderRadius={30} color="#fff">
              Sign Up
              <BsArrowUpRight />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}

export default Nav;
