import "./searchBox.css";

export function SearchBox({ searchInput, buttonFunc, searchData }) {
  return (
    <div className="SearchBox">
      <input list="data" onChange={(e) => searchInput(e.target.value)} />
      <button type="submit" onClick={buttonFunc}>
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
