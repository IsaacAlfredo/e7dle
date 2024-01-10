import "./Card.css";

export function Card({ value, choiceColor }) {
  return (
    <div className="Card" style={{ background: choiceColor }}>
      <p>{value}</p>
    </div>
  );
}
