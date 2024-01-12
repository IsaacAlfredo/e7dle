import { Card } from "../Card/card";
import "./CharCard.css";

export function CharCard({
  name,
  gender,
  element,
  charClass,
  rarity,
  zodiac,
  userTry,
  origin,
  imprint,
}) {
  return (
    <div className="CharCard">
      <Card value={name} choiceColor={userTry.name} fontSize={0.75} />
      <Card value={gender} choiceColor={userTry.gender} />
      <Card value={element} choiceColor={"#910d0d"} />
      <Card value={charClass} choiceColor={userTry.role} />
      <Card value={rarity} choiceColor={userTry.rarity[0]} />
      <Card value={zodiac} choiceColor={userTry.zodiac} />
      <Card value={origin} choiceColor={"#910d0d"} />
      <Card value={imprint} choiceColor={"#910d0d"} />
      <Card value={2018} choiceColor={"#910d0d"} />
    </div>
  );
}
