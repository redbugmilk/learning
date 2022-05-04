import React, { useState } from "react";

const INITIAL_STATE = {
  title: "",
  name: "",
};

function NewTitle(props) {
  const [formInput, setFormInput] = useState(INITIAL_STATE);
  const titleChangeHandler = (event) => {
    setFormInput((previousState) => ({
      ...previousState,
      title: event.target.value,
    }));
  };
  const nameChangeHandler = (event) => {
    setFormInput((previousState) => ({
      ...previousState,
      name: event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveTitleData(formInput);
    setFormInput(INITIAL_STATE);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Enter title</label>
      <input
        type="text"
        value={formInput.title}
        onChange={titleChangeHandler}
      />
      <label>Enter Name</label>
      <input type="text" value={formInput.name} onChange={nameChangeHandler} />
      <button type="submit">Add new title</button>
    </form>
  );
}
export default NewTitle;
