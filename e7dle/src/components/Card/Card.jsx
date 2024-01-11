import "./Card.css";

export function Card({ value, choiceColor, fontSize = 1 }) {
  return (
    <div className="Card" style={{ background: choiceColor }}>
      <p style={{ fontSize: fontSize + "rem" }}>{value}</p>
    </div>
  );
}
