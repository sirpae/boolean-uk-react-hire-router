import { useState } from "react";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const { person, hireAPerson } = props;

  function handleSubmit(event) {
    event.preventDefault();

    const newHire = {
      ...person,
      wage,
    };

    hireAPerson(newHire);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;