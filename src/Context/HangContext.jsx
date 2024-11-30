/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { createContext, useContext } from "react";
import "@mantine/notifications/styles.css";
import words from "./../Words/wordsList.json";
import { useEffect } from "react";
import Swal from "sweetalert2";
const HangContext = createContext();

export const useHang = () => useContext(HangContext);

export const HangProvider = ({ children }) => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
      .toUpperCase()
      .split("");
  });

  //! ----------------Question---------------
  // function getLetter(l) {
  //   wordToGuess.includes(l) ? setEnteredLetter(l) : "";
  //   console.log(enteredLetter);

  // }
  const [enteredLetter, setEnteredLetter] = useState([]);

  const [removeChar, setRemoveChar] = useState([]);
  // useEffect works after [enteredLetter] is already changed

  const [numOfWronge, setNumOfWronge] = useState(0);
  useEffect(() => {
    // remove doublicate because some times is word
    // containe 2 same letter it stored as one letter
    // so we make a new array of the original word with remove dublicate
    //to use it to compares between lengths of both of them
    const afterRemoveDublicated = [...new Set(wordToGuess)];
    if (enteredLetter) {
      console.log("Entered letter:", enteredLetter);
    }
    if (
      enteredLetter.every((letter) => wordToGuess.includes(letter)) &&
      enteredLetter.length === afterRemoveDublicated.length
    ) {
      Swal.fire({
        title: "🎉 Congratulations! 🏆",
        text: "You guessed all the letters!",
        icon: "success",
        confirmButtonText: "Play Again",
      }).then(() => {
        window.location.reload();
      });
    }
    if (numOfWronge > 6) {
      Swal.fire({
        title: "Game Over! 💔",
        text: `You've exceeded the maximum wrong attempts. Word ${wordToGuess.join("")}`,
        icon: "error",
        confirmButtonText: "Try Again",
      }).then(() => {
        window.location.reload();
      });
    }
  }, [enteredLetter, numOfWronge]); //? Only runs when enteredLetter is updated or num wrong

  function getLetter(l) {
    if (wordToGuess.includes(l)) {
      setEnteredLetter((prev) => [...prev, l]);
    } else {
      setNumOfWronge((prev) => prev + 1);
      console.log(numOfWronge);
    }
    setRemoveChar((prev) => [...prev, l]);
  }

  //-----------------------------------

  return (
    <HangContext.Provider
      value={{ wordToGuess, getLetter, enteredLetter, numOfWronge, removeChar }}
    >
      {children}
    </HangContext.Provider>
  );
};
