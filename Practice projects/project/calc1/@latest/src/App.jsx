import Display from "./components/Display";
import ButCont from "./components/ButCont";
import styles from "./App.module.css";
import { useState } from "react";

import "./App.css";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (butText) => {
    if (butText === "C") {
      setCalVal("");
    } else if (butText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + butText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div classNameName={styles.calc}>
      <Display displayVal={calVal}></Display>
      <ButCont onButtonClick={onButtonClick}></ButCont>
    </div>
  );
}

export default App;
