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

  function handleAddCard() {
    const entries = Object.entries(charData.data);
    for (const ent in entries) {
      for (const e in entries[ent]) {
        if (entries[ent][1].name === dailyChar.char.name) {
          console.log(entries[ent][1].name);
          console.log(entries[ent][1]);
          break;
        }
      }
    }

    const newCard = {
      name: charInput,
    };
    setCards((prevState) => [...prevState, newCard]);
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
          <CharCard name={card.name} />
        ))}
      </div>
    </>
  );
}

export default App;
