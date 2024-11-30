import { Box, Flex } from "@mantine/core";
import React from "react";
import { useHang } from "../../Context/HangContext";

export default function HangmanDrawing() {
  const {numOfWronge} = useHang();
  const upHead = (
    <Box pos={"absolute"} right={0} h={40} w={5} bg={"white"}></Box>
  );
  const Head = (
    <Box
      className="Head"
      pos={"absolute"}
      style={{
        border: "2px solid white",
        borderRadius: "50%",
      }}
      right={-32}
      top={40}
      h={70}
      w={70}
    ></Box>
  );
  const Backbon = (
    <Box
      className="BackBon"
      pos={"absolute"}
      top={110}
      right={0}
      h={100}
      w={3}
      bg={"white"}
    ></Box>
  );
  const R_Arm = (
    <Box
      className="R-Arm"
      style={{ rotate: "30deg" }}
      pos={"absolute"}
      top={130}
      right={-2}
      h={3}
      w={80}
      bg={"white"}
    ></Box>
  );
  const L_Arm = (
    <Box
      className="L-Arm"
      style={{ rotate: "-30deg" }}
      pos={"absolute"}
      top={130}
      right={-74}
      h={3}
      w={80}
      bg={"white"}
    ></Box>
  );
  const L_Leg = (
    <Box
      className="L-Leg"
      style={{ rotate: "-30deg" }}
      pos={"absolute"}
      top={228}
      right={-2}
      h={3}
      w={80}
      bg={"white"}
    ></Box>
  );
  const R_Leg = (
    <Box
      className="R-Leg"
      style={{ rotate: "30deg" }}
      pos={"absolute"}
      top={228}
      right={-75}
      h={3}
      w={80}
      bg={"white"}
    ></Box>
  );

  const man = [upHead,Head,Backbon,R_Arm,L_Arm,R_Leg,L_Leg];
  return (
    <Box>
      <Box h={5} ml={100} w={150} bg={"white"}></Box>
      <Flex pos={"relative"}>
        <Box h={300} w={5} ml={100} bg={"white"}></Box>
        {man.map((obj,index)=>(
          numOfWronge>index ? obj : null 
        ))}
      </Flex>
      <Box h={10} w={200} bg={"white"}></Box>
    </Box>
  );
}
