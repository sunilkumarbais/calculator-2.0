import { useState } from 'react';
import { evaluate } from "mathjs"
import { Buttons } from './components/Buttons';
import { Display } from './components/Display';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState("")

  function handleClick(e) {
    let value = e.target.innerHTML;
    if (!value) return alert("Give me Some Input");
    if (value === "=") {
      try {
        let result = evaluate(inputValue).toString();
        setInputValue(result);
      } catch (err) {
        setInputValue("Error");
      }
    } else if (value === "C") {
      setInputValue("");
    } else if (value === "⌫") {
      setInputValue(prev => prev.slice(0, -1));
    } else {
      // only append numbers/operators
      setInputValue(prev => prev + value);
    }
  }



  return (
    <div className="App">
      <h3>Calculator</h3>
      <Display inputValue={inputValue} setInputValue={setInputValue} />
      <Buttons handleClick={handleClick} />
    </div>
  );
}

export default App;
