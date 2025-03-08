import { useState } from "react";
import "./App.css";

function App() {
  const [canChangeColor, setCanChangeColor] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChangeColor = () => {
    setCanChangeColor(!canChangeColor);
  };

  return (
    <div>
      <button
        className={canChangeColor ? "blue" : "red"}
        onClick={handleChangeColor}
        disabled={isDisabled}
      >
        {canChangeColor ? "Change to red" : "Change to blue"}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={isDisabled}
        onClick={() => setIsDisabled(!isDisabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
