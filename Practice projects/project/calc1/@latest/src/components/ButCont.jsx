import styles from "./ButCont.module.css";

const ButCont = ({ onButtonClick }) => {
  const ButNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div classNameName={styles.butCont}>
      {ButNames.map((ButName) => (
        <button
          classNameName={styles.button}
          onClick={() => onButtonClick(ButName)}
        >
          {ButName}
        </button>
      ))}
    </div>
  );
};

export default ButCont;
