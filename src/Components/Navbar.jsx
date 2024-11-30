import { Anchor, Box, Container, Flex, Text } from "@mantine/core";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box
      bg="linear-gradient(90deg, #010101, #0050e0,#010101)"
      p="1.1rem"
      shadow="xl"
    >
      <Container size={"xl"}>
        <Flex justify={"space-between"} align={"center"} gap={"1rem"}>
          <Text
            size="xl"
            fw={700}
            c="white"
            style={{
              letterSpacing: "0.05rem",
              textTransform: "uppercase",
            }}
          >
            Welcome Site For Gaming Bro
          </Text>
          <Flex gap={"20px"}>
            <Anchor component={NavLink} to="/" size="xl" underline="never" c={"grape.5"} fw={700}>
              Home
            </Anchor>
            <Anchor size="xl" underline="never" c={"grape.5"} fw={700}>
              Store
            </Anchor>
            <Anchor size="xl" underline="never" c={"grape.5"} fw={700}>
              Downloads
            </Anchor>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
