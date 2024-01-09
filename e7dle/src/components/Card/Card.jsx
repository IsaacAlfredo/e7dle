import "./Card.css";

export function Card({ value }) {
  return (
    <div className="Card" style={{ background: "red" }}>
      <p>{value}</p>
    </div>
  );
}
