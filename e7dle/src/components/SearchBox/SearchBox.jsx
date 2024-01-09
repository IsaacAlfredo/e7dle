import "./searchBox.css";

export function SearchBox({ searchInput, button, searchData }) {
  return (
    <div className="SearchBox">
      <input list="data" onChange={(e) => searchInput(e.target.value)} />
      <button type="submit" onClick={button}>
        Submit
      </button>
      <datalist id="data">
        {searchData.map((op) => (
          <option>{op}</option>
        ))}
      </datalist>
    </div>
  );
}
