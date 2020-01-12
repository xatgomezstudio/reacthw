//to make sure the cards aren't in any order
function shuffle(array) {
  const _array = array.slice(0);
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.random; //(Math.Random() * (i + 1));
    let temp = array[i];
    _array[i] = array[randomIndex];
    _array[randomIndex] = temp;
  }

  return _array;
}

export default function initializeDeck() {
  let id = 0,
    cards = [
      "Australia",
      "Colombia",
      "Iran",
      "Iraq",
      "Japan",
      "Puerto Rico",
      "Singapore",
      "South Korea",
      "Saudi Arabia",
      "Turkey",
      "United Arab Emirates"
    ].reduce((acc, type) => {
      //acc is an array, below we're pushing on JS objects. This one starts at 0
      acc.push({
        id: id++,
        type
      });
      //then we do it twice, because we want two, this one starts at 1
      acc.push({
        id: id++,
        type
      });
      return acc;
    }, []);

  return shuffle(cards);
}
