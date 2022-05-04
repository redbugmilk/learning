import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const active = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return { active: active };
  });
  return (
    <div
      className={`${classes.control} ${props.isValid ? classes.invalid : ""}`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
