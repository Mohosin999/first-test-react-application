import { useState } from "react";

const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
          if (text) {
            addNewTask(text);
            setText("");
          } else {
            alert("No Text Here!");
          }
        }}
      >
        Create
      </button>
    </div>
  );
};

export default CreateTask;
