import React from "react";
import Todo from "./Todo";

export default function Todos({ filter, todos, changeTodo, removeTodo }) {
    return (
        <div className="todos">
            {todos.map((x) => (
                <Todo
                    key={x.id}
                    data={x}
                    filter={filter}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}
