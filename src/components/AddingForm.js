import React from "react";
import "./AddingForm.css";
export default function AddingForm({ filter, addTodo }) {
    const submitHandle = (e) => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            content: e.target.input.value,
            completed: false,
        });
        e.target.reset();
    };
    return (
        <>
            {filter === "completed" ? null : (
                <form className="adding-form" onSubmit={submitHandle}>
                    <input
                        type="text"
                        id="input"
                        placeholder="add details"
                        required
                        autoComplete="off"
                    />
                    <button>Add</button>
                </form>
            )}
        </>
    );
}
