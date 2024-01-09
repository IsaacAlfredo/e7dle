import { Card } from "../Card/card";
import "./CharCard.css";

export function CharCard({ name }) {
  return (
    <div className="CharCard">
      <Card value={name} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
