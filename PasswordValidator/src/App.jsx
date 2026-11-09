import { useState } from "react";
import "./App.css";

function App() {

  const [password, setPassword] = useState("");

  const hasCapital = /[A-Z]/.test(password);
  const hasSmall = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const hasLength = password.length >= 8;

  return (
    <div>
      <h1>THE REAL-TIME PASSWORD VALIDATOR</h1>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <p className={hasCapital ? "green" : "red"}>
        {hasCapital ? "" : ""} CAPITAL LETTER
      </p>

      <p className={hasSmall ? "green" : "red"}>
        {hasSmall ? "" : ""} SMALL LETTER
      </p>

      <p className={hasNumber ? "green" : "red"}>
        {hasNumber ? "" : ""} NUMBER
      </p>

      <p className={hasSpecial ? "green" : "red"}>
        {hasSpecial ? "" : ""} SPECIAL CHARACTER
      </p>

      <p className={hasLength ? "green" : "red"}>
        {hasLength ? "" : ""} MINIMUM 8 CHARACTERS
      </p>

    </div>
  );
}

export default App;