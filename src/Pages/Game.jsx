import { Container, Flex, Text } from "@mantine/core";
import React from "react";
import MainLayout from "../Layout/MainLayout";
import { useHang } from "../Context/HangContext";
import LoseWin from "../Components/GameComponents/LoseWin";
import HangmanDrawing from "../Components/GameComponents/HangmanDrawing";
import HangmanWord from "../Components/GameComponents/HangmanWord";
import Keyboard from "../Components/GameComponents/Keyboard";

export default function Game() {
  const { wordToGuess } = useHang();
  console.log(wordToGuess);

  return (
    <MainLayout>
      <Container size={"xs"}>
        <Flex
          c={"white"}
          direction={"column"}
          justify={"center"}
          align={"center"}
        >
          <HangmanDrawing />
          <HangmanWord />
          <Keyboard />
        </Flex>
      </Container>
    </MainLayout>
  );
}
