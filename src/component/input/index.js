import React from "react";

export default function Input({query, setQuery}) {
  return (
    <div className="header-frame">
      <div className="title">
        <h1>Truck Timeline</h1>
      </div>
      <div className="input-frame">
        <input
          className="input-field"
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          placeholder="Truck name"
        />
      </div>
    </div>
  );
}
