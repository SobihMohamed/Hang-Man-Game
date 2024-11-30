import { Grid, Text } from "@mantine/core";
import React from "react";
import { useHang } from "../../Context/HangContext";

export default function Keyboard() {
  const { removeChar, enteredLetter, getLetter } = useHang();
  console.log("removed charchters", removeChar);

  const rows = [];
  for (let i = 0; i < 26; i++) {
    rows.push(
      <Grid.Col
        span={1}
        key={i}
        w={50}
        mx={3}
        style={{ textAlign: "center" }}
        onClick={() => getLetter(String.fromCharCode(65 + i))}
      >
        <Text
          bg={removeChar.includes(String.fromCharCode(65+i))?"red":"indigo"}
          style={{ borderRadius: "10px", cursor: "pointer", fontSize: "30px" }}
          display={
            enteredLetter.includes(String.fromCharCode(65 + i))
              ? "none"
              : "block"
          }
        >
          {String.fromCharCode(65 + i)} {/* Converts index to A-Z */}
        </Text>
      </Grid.Col>
    );
  }
  return (
    <Grid columns={9} ml={10} gutter={"xs"} mt={20}>
      {rows}
    </Grid>
  );
}
