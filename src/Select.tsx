import { useState } from "react";
import styles from "./select.module.css";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  value?: SelectOption;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  function clearOptions(){
    onChange(undefined)
  }
  function selecOption(option: SelectOption) {
    onChange(option)
  }

  return (
    <div
      onBlur={()=> setIsOpen(false)}
      onClick={() => setIsOpen((pre) => !pre)}
      tabIndex={0}
      className={styles["app-container"]}
    >
      <span className={styles.value}>{value?.label}</span>
      <button onClick={e => {
        e.stopPropagation()
        clearOptions()
      }} className={styles["clear-button"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => (
          <li onClick={e=>{
            e.stopPropagation()
            selecOption(option)
            setIsOpen(false)

          }} key={option.label} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
