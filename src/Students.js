import { useState } from "react";

export default function Students({ name, level }) {
  const [stateLevel, setStateLevel] = useState(level);

  return (
    <div className="student-card">
      <h1>Hello {name}, how are you?</h1>
      <h3>You are in Level : {stateLevel} right now.</h3>
      <button
        className="btn"
        onClick={() => setStateLevel(parseInt(stateLevel) + 1)}
      >
        Increase level by 1.
      </button>
      <button
        className="btn btn-decrement"
        onClick={() => setStateLevel(parseInt(stateLevel) - 1)}
      >
        Decrease level by 1.
      </button>
    </div>
  );
}
