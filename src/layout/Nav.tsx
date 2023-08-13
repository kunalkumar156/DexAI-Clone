import {
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  color,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
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

          <Flex>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Text
                padding="30px 30px"
                fontSize="16px"
                fontWeight="600"
                color="white"
                transition="color 0.3s ease"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                _hover={{
                  color: "#6720FF",
                }}
              >
                Home
                <BiChevronDown />
              </Text>
            </Link>

            <Link href="#" style={{ textDecoration: "none" }}>
              <Text
                padding="30px 30px"
                fontSize="16px"
                fontWeight="600"
                color="white"
                transition="color 0.3s ease"
                _hover={{ color: "#6721FF" }}
              >
                About Us
              </Text>
            </Link>

            <Link href="#" style={{ textDecoration: "none" }}>
              <Text
                padding="30px 30px"
                fontSize="16px"
                fontWeight="600"
                color="white"
                transition="color 0.3s ease"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                _hover={{ color: "#6721FF" }}
              >
                Pages <BiChevronDown />
              </Text>
            </Link>

            <Link href="#" style={{ textDecoration: "none" }}>
              <Text
                padding="30px 30px"
                fontSize="16px"
                fontWeight="600"
                color="white"
                transition="color 0.3s ease"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                _hover={{
                  color: "#6720FF",
                }}
              >
                News <BiChevronDown />
              </Text>
            </Link>

            <Link href="#" style={{ textDecoration: "none" }}>
              <Text
                padding="30px 30px"
                fontSize="16px"
                fontWeight="600"
                color="white"
                transition="color 0.3s ease"
                _hover={{
                  color: "#6720FF",
                }}
              >
                Contacts
              </Text>
            </Link>
          </Flex>
          <Flex justify="center" align="center" gap={10}>
            {/* language */}
            <Link href="#" style={{ textDecoration: "none" }}>
              <Flex alignItems="center">
                {" "}
                {/* Use Flexbox for layout */}
                <Text marginRight="4px">EN</Text>
                <BiChevronDown />
              </Flex>
            </Link>

            {/* Sign Up Button */}
            <Button
              className="button"
              borderRadius={30}
              color="#fff"
              padding="24px 26px "
              textAlign="center"
              backgroundColor="transparent"
              _hover={{ backgroundColor: "transparent" }}
            >
              Sign Up
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
        </Flex>
      </Container>
    </>
  );
}

export default Nav;
