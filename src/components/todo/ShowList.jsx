import React from "react";
import { useSelector } from "react-redux";

import { deleteTodo } from "./removeTodo";

const ShowList = () => {
  const todoList = useSelector((state) => state.Todo.value);
  return (
    <div>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Task no.</th>
            <th scope="col">Complete</th>
            <th scope="col">Task</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
         
          {todoList.map((item, i) => {
            return (
              <tr key={i.toString}>
                <th scope="row">{i+1}</th>
                <td><input  name="packersOff" type="checkbox"  /></td>
                <td>{item}</td>
                <td><button onClick={()=>{deleteTodo(i)}} className="btn btn-danger" >Remove From List</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowList;

