import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slice/Todo";

const CreateList = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();
  return (
    <div
      style={{ marginTop: "100px" }}
      className="d-flex justify-content-center">
 
        <input
          ref={taskInput}
          type="text"
          placeholder="Add Your Task"
          className="form-control"
        />
  
      <button
        onClick={() => {
          dispatch(addTodo(taskInput.current.value));
        }}
        className="btn btn-primary">
        submit
      </button>
    </div>
  );
};

export default CreateList;
