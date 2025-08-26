import { useState } from "react";

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [error, setError] = useState("");
  const [age, setAge] = useState(null);

  const calculateAgeDetailed = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // adjust days if negative
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // adjust months if negative
    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
  };

  const calButton = () => {
    if (birthdate === "") {
      setError("Please select a date");
      setAge(null);
      return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    if (birthDateObj > today) {
      setError("Birthdate cannot be in the future");
      setAge(null);
      return;
    }

    setError("");
    const result = calculateAgeDetailed(birthdate);
    setAge(result);
  };

  return (
    <div className="container">
      <h2 className="title">Age Calculator</h2>

      <label
        htmlFor="birthdate"
        className="label"
        data-testid="label-birthdate"
      >
        Enter/Select a birthdate:
      </label>


      <input
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        id="birthdate"
        type="date"
        className="input-date"
        data-testid="input-birthdate"
      />

      <button
        onClick={calButton}
        className="btn-calc"
        data-testid="btn-calculate"
      >
        Calculate Age
      </button>

      {error && (
        <p className="error-msg" data-testid="error-msg">
          {error}
        </p>
      )}

      {age && (
        <p className="age-result" data-testid="age-result">
          {age}
        </p>
      )}
    </div>
  );
}

export default AgeCalculator;
