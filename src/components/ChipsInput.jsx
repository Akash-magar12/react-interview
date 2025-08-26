import { useState } from "react";
import "../index.css"; // import css file

function ChipsInput() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState("");

  const addData = (e) => {
    if (e.key === "Enter" && val.trim() !== "") {
      setData((prev) => [...prev, val]);
      setVal("");
    }
  };

  const handleDelete = (id) => {
    const filtered = data.filter((_, i) => id !== i);
    setData(filtered);
  };

  return (
    <div className="chips-container">
      <h2 className="chips-title">Chips Input</h2>

      <input
        type="text"
        value={val}
        onKeyDown={addData}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Type a chip and press Enter"
        className="chips-input"
      />

      <div className="chips-list">
        {data.map((d, i) => (
          <div key={i} className="chip-wrapper">
            <button onClick={() => handleDelete(i)} className="chip">
              {d}
              <span className="chip-remove">X</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
