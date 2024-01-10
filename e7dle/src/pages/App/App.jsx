import "./App.css";
import axios from "axios";
import { CharCard } from "../../components/CharCard/CharCard";
import { SearchBox } from "../../components/searchBox/searchBox";
import { CharHeader } from "../../components/CharHeader/CharHeader";
import { useState, useEffect } from "react";

function App() {
  const [charInput, setCharInput] = useState([]);
  const [cards, setCards] = useState([]);
  const [charData, setCharData] = useState({ data: "" });
  const [dailyChar, setDailyChar] = useState({
    char: {
      id: "c1001",
      _id: "ras",
      name: "Ras",
      rarity: 3,
      attribute: "fire",
      role: "knight",
      sex: 1,
      zodiac: "scales",
    },
  });
  const [charNames, setCharNames] = useState([]);
  const [userTries, setUserTries] = useState([]);

  function charCompare(userTryChar) {
    var charResult = {
      name: "red",
      gender: "red",
      role: "red",
      zodiac: "red",
      rarity: ["red", "upper"],
    };
    if (userTryChar.name === dailyChar.char.name) {
      charResult = {
        name: "green",
        gender: "green",
        role: "green",
        zodiac: "green",
        rarity: ["green", "green"],
      };
    } else {
      if (userTryChar.sex === dailyChar.char.sex) {
        charResult.gender = "green";
      }
      if (userTryChar.role === dailyChar.char.role) {
        charResult.role = "green";
      }
      if (userTryChar.zodiac === dailyChar.char.zodiac) {
        charResult.zodiac = "green";
      }
      if (userTryChar.rarity === dailyChar.char.rarity) {
        charResult.rarity = ["green", "green"];
      } else if (userTryChar.rarity > dailyChar.char.rarity) {
        charResult.rarity = ["red", "down"];
      }
    }
    return charResult;
  }

  function handleAddCard() {
    var userTry;
    const entries = Object.entries(charData.data);
    for (const ent in entries) {
      for (const e in entries[ent]) {
        if (entries[ent][1].name === charInput) {
          if (userTries.includes(charInput)) {
            //create warn
          } else {
            setUserTries((prevTries) => [...prevTries, charInput]);
            userTry = charCompare(entries[ent][1]);
            console.log(userTry);
            const newCard = {
              name: charInput,
              gender: entries[ent][1].sex,
              role: entries[ent][1].role,
              zodiac: entries[ent][1].zodiac,
              rarity: entries[ent][1].rarity,
              userTry: userTry,
            };
            setCards((prevCards) => [...prevCards, newCard]);
            break;
          }
        }
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      const charNameList = [];
      try {
        const charDataHandler = await axios.get("http://localhost:3000");
        setCharData({ data: charDataHandler.data });
        for (const chars in Object.values(charDataHandler.data)) {
          charNameList.push(
            Object.values(charDataHandler.data).filter((key) => key.name)[chars]
              .name
          );
        }
        setCharNames(charNameList);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <SearchBox
          searchInput={setCharInput}
          buttonFunc={handleAddCard}
          searchData={charNames}
        />
        <CharHeader />
        {cards.map((card) => (
          <CharCard
            name={card.name}
            gender={card.gender}
            charClass={card.role}
            zodiac={card.zodiac}
            rarity={card.rarity}
            userTry={card.userTry}
          />
        ))}
      </div>
    </>
  );
}

export default App;
