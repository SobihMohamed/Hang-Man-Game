import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { useHang } from "../../Context/HangContext";

export default function HangmanWord() {
  const { wordToGuess, enteredLetter } = useHang();

  return (
    <Flex gap={10} mt={0}>
      {wordToGuess.map((letter, index) => {
        return (
          <Box ta={"center"} key={index}>
            <Text
              fw={"bolder"}
              style={{
                fontSize: "50px",
                visibility: enteredLetter.includes(letter)
                  ? "visible"
                  : "hidden",
                
              }}
              w={"50px"}
            >
              {letter}
            </Text>
            <Box w={50} h={10} bg={"white"}></Box>
          </Box>
        );
      })}
    </Flex>
  );
}
