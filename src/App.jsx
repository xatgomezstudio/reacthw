//utilizes the array below
import React, { useState, useEffect } from "react";

//utilizes saved card function
//import Card from "./components/board";

import initializeDeck from "./deck";
import { isArgumentPlaceholder } from "@babel/types";

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  //to disable the board when you flip two cards
  //default set at false to ensure the board starts enabling the event listner
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  //storing the value of preloaded images
useEffect(() => {
  preLoadImages()
  //looking at the cards variable 
}, cards)

  // basically a media query
  useEffect(() => {
    const resizeListner = window.addEventListner("resize", resizeBoard);

    return () => window.removeEventListner("resize", resizeListner);
  });

  const handleClick = (id, type) => {
    //logic to flip 2 cards
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
      //and stops the flipping after 2
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      //confirms two cards have been clicked
      if (isArgumentPlaceholder(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id, type)) {
        //solved = cards that were previously solved, flipped = the card previously selected, id= the card most recently chosen
        setSolved([...solved, flipped[0], id]);
        //lets you try again
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  const preLoadImages = () => {
    //console.log(cards.length);
    cards.map(card => {
      const src = "/img/$(card.type).png";
      //console.log(src)
      new Image().src = src;
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = id => flipped.includes(id);

  //dumps setSolved
  const isMatch = (id, clickType) => {
    //const clickedCard = cards.find(card);
    //card.id === id;
    //const flippedCard = cards.find(card);
    //flipped[0] === card.id;
    //return flippedCard.type === clickType;
    return true;
  };
  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  //header and board displayed
  return (
    <div>
      <h1>WWIII Memory</h1>
      <h2>Can you remember who the US deals arms to?</h2>
      <board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </div>
  );
}
