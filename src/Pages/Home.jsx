import React from "react";
import "@mantine/carousel/styles.css";
import { Box, Button, Container, Flex, Image, Text } from "@mantine/core";
import MainLayout from "../Layout/MainLayout";
import { Carousel } from "@mantine/carousel";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <Carousel
          slideSize="100%"
          height={500}
          slideGap="lg"
          controlsOffset="xl"
          controlSize={40}
          loop
          dragFree
        >
          <Carousel.Slide bg={"red"}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src="https://th.bing.com/th/id/R.7ea681c9cf0763262dc4025ef256830e?rik=lCpXru%2ftHTXPPA&pid=ImgRaw&r=0"
            />
          </Carousel.Slide>
          <Carousel.Slide bg={"red"}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                position: "center",
                objectFit: "cover",
              }}
              src="https://storage.googleapis.com/ltkcms.appspot.com/fs/wfa/images/cover/hangman-games.600"
            />
          </Carousel.Slide>
          <Carousel.Slide bg={"red"}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src="https://storage.googleapis.com/ltkcms.appspot.com/fs/wfa/images/cover/hard-hangman-words.600"
            />
          </Carousel.Slide>
        </Carousel>
        <Flex justify={"center"}>
          <Button
            size="xl"
            fw={700}
            variant="gradient"
            gradient={{ from: "grape", to: "violet", deg: 90 }}
            mt="2rem"
            h={"70px"}
            w={"50%"}
            component={NavLink}
            to="/Game"
          >
            Start Game
          </Button>
        </Flex>
      </Container>
    </MainLayout>
  );
}
