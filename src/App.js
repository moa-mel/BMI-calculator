import React, { useState } from "react";

import TextInput from "./components/TextInput";
import Button from "./components/Button";

const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };

  const getBmi = (bmi) => {
    
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  };

  return (
    <div className="App">
    <div className="container">
      <div
        style={{
          display: "block",
          width: "50%",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2>BMI Calculator</h2>
      </div>
      <div className="row">
     <div   style={{
          display: "block",
          width: "50%",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
        >
        <TextInput
          label="Height"
          placeholder="Enter height in cm"
          handleChange={handleHeightChange}
          value={height}
        />
        </div>
      </div>
      <div className="row">
      <div   style={{
             display: "block",
             width: "50%",
             margin: "0 auto",
             padding: "20px",
             boxSizing: "border-box",
        }}
        >
        <TextInput
          label="Weight"
          placeholder="Enter weight in kg"
          handleChange={handleWeightChange}
          value={weight}
        />
       </div> 
      </div>
      <div className="row">
      <div   style={{
             display: "block",
             width: "50%",
             margin: "0 auto",
             padding: "20px",
             boxSizing: "border-box",
        }}
        >
        <Button label="Submit" onClick={computeBmi} />
        </div>
      </div>
      <div className="row">
        {
          isNaN(bmi)?null:<h3>Your BMI = {bmi}</h3> 
        }
        
      </div>
      <div className="row">
        <h3>{bmiClass}</h3>
      </div>
    </div>
    </div>
  );
};

export default App;