import React from "react";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

export default function Todo({ data, filter, changeTodo, removeTodo }) {
    return (
        <div className={"todo " + (data.completed ? "completed" : "")}>
            <label>
                <input
                    checked={data.completed}
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => changeTodo(data.id)}
                />
                <div className="checkbox"></div>
                <div className="tick"></div>
            </label>
            <div className="todo-task">{data.content}</div>
            {filter === "completed" ? (
                <IconButton onClick={() => removeTodo(data.id)}>
                    <DeleteOutline />
                </IconButton>
            ) : null}
        </div>
    );
}
