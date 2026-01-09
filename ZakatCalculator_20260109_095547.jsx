import React, { useState } from "react";

const ZAKAT_RATE = 0.025;
const NISAB = 5000; // adjust if needed

export default function ZakatCalculator() {
  const [cash, setCash] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [investments, setInvestments] = useState("");
  const [liabilities, setLiabilities] = useState("");

  const totalAssets =
    Number(cash) +
    Number(gold) +
    Number(silver) +
    Number(investments);

  const netWealth = totalAssets - Number(liabilities);

  const zakat =
    netWealth >= NISAB ? netWealth * ZAKAT_RATE : 0;

  return (
    <div style={styles.container}>
      <h2>Zakat Calculator</h2>

      <Input label="Cash & Savings" value={cash} onChange={setCash} />
      <Input label="Gold Value" value={gold} onChange={setGold} />
      <Input label="Silver Value" value={silver} onChange={setSilver} />
      <Input label="Investments" value={investments} onChange={setInvestments} />
      <Input label="Liabilities / Debts" value={liabilities} onChange={setLiabilities} />

      <hr />

      <p><strong>Total Assets:</strong> {totalAssets.toFixed(2)}</p>
      <p><strong>Net Wealth:</strong> {netWealth.toFixed(2)}</p>

      {netWealth >= NISAB ? (
        <h3>Zakat Payable: {zakat.toFixed(2)}</h3>
      ) : (
        <h3>No Zakat Due (Below Nisab)</h3>
      )}
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div style={styles.inputGroup}>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="0"
      />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1.5rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
};