import { Anchor, Box, Flex, Text } from "@mantine/core";
import React from "react";

export default function Header() {
  return (
    <Flex
      my="1.5rem"
      justify="center"
      mx="auto"
      align="center"
      w="50%"
      bg="linear-gradient(135deg, #000050, #50107b)"
      shadow="lg"
      p="md"
      style={{
        border: "2px solid red", 
      }}
    >
      <Text
        style={{ fontSize: "3rem", textTransform: "uppercase", letterSpacing: "0.1rem" }}
        fw={900}
        c="white"
      >
        Hang Man Game
      </Text>


    </Flex>
  );
}
