import { Card } from "../Card/card";
import "./CharCard.css";

export function CharCard({ name, gender, charClass, rarity, zodiac, userTry }) {
  return (
    <div className="CharCard">
      <Card value={name} choiceColor={userTry.name} />
      <Card value={gender} choiceColor={userTry.gender} />
      <Card value={charClass} choiceColor={userTry.role} />
      <Card value={charClass} choiceColor={userTry.role} />
      <Card value={rarity} choiceColor={userTry.rarity[0]} />
      <Card value={zodiac} choiceColor={userTry.zodiac} />
    </div>
  );
}
