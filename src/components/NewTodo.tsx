import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }

        todosCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = "";
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">TO-DO LIST</label>
            <input
                type="text"
                id="text"
                ref={todoTextInputRef}
                placeholder="Add your task..."
            />
            <button>Add</button>
        </form>
    );
};

export default NewTodo;
