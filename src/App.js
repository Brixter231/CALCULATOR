import './App.css';
import { useState } from "react";

function Display({ display }) {
  return (
    <div className="Disp">{display}</div>
  );
}

function Key({ label, onClick }) {
  return (
    <button onClick={onClick} className="key">
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const numClickHandler = (e) => {
    const value = e.target.innerHTML;
    if (op === null) {
      setNum1(num1 === null ? value : num1 + value);
      setDisp(num1 === null ? value : num1 + value);
    } else {
      setNum2(num2 === null ? value : num2 + value);
      setDisp(num2 === null ? value : num2 + value);
    }
  };

  const opClickHandler = (e) => {
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(num1 + ' ' + value);
  };

  const eqClickHandler = () => {
    if (num1 !== null && num2 !== null && op !== null) {
      let result;
      switch (op) {
        case "+":
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case "×":
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case "÷":
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          result = "ERROR";
      }
      setDisp(result);
      setNum1(result); 
      setNum2(null);   
      setOp(null);     
    }
  };

  const clrClickHandler = () => {
    setNum1(null);
    setNum2(null);
    setOp(null);
    setDisp(0);
  };

  const showFullName = () => {
    setDisp("Brixter Balboa Bondoc"); 
  };

  return (
    <div className="App">
      <h1>Calculator of Brixter Bondoc - IT3A</h1>
      <div className="Calc">
        <Display display={disp} />
        <div className="Buttons">
          {[7, 8, 9, "÷", 4, 5, 6, "×", 1, 2, 3, "-"].map(label => (
            <Key key={label} label={label} onClick={label === "÷" || label === "×" || label === "-" ? opClickHandler : numClickHandler} />
          ))}
          <Key label={"CLR"} onClick={clrClickHandler} />
          <Key label={0} onClick={numClickHandler} />
          <Key label={"="} onClick={eqClickHandler} />
          <Key label={"+"} onClick={opClickHandler} />
          <Key label={"BONDOC"} onClick={showFullName} />
        </div>
      </div>
    </div>
  );
}

export default App;
