import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import AddingForm from "./AddingForm";
import Todos from "./Todos";

export default function Main() {
    const [filter, setFilter] = useState("all");
    const [todos, setTodos] = useState([]);
    const [filtedTodos, setFiltedTodos] = useState([]);
    const addTodo = (val) => {
        setTodos([...todos, val]);
    };
    const changeTodo = (id) => {
        setTodos(
            todos.map((x) => {
                if (id === x.id) return { ...x, completed: !x.completed };
                return x;
            })
        );
    };
    useEffect(() => {
        if (!localStorage.getItem("todos")) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else setTodos(JSON.parse(localStorage.getItem("todos")));
    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        switch (filter) {
            case "all":
                setFiltedTodos(todos);
                break;
            case "active":
                setFiltedTodos(todos.filter((x) => !x.completed));
                break;
            case "completed":
                setFiltedTodos(todos.filter((x) => x.completed));
                break;
            default:
                break;
        }
    }, [filter, todos]);
    const removeTodo = (id) => {
        setTodos(todos.filter((x) => x.id !== id));
    };
    return (
        <main className="container">
            <FilterBar setFilter={setFilter} />
            <AddingForm filter={filter} addTodo={addTodo} />
            <Todos
                filter={filter}
                todos={filtedTodos}
                changeTodo={changeTodo}
                removeTodo={removeTodo}
            />
        </main>
    );
}
