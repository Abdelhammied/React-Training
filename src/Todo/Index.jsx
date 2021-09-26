import React, { useState } from "react";

// Components
import TodoForm from "./components/Todo.form";
import TodoList from "./components/TodoList";

import Notification, { success } from "./notifications";

// Css
import "bootstrap/dist/css/bootstrap.min.css";

// Layout
import { Layout } from "./components/Layout/Index";

export default function Index(props) {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos([
			...todos,
			{
				todo: todo,
				completed: false,
				completed_at: null,
			},
		]);
	};

	const completeTask = (index) => {
		let currentTodos = todos.slice();

		currentTodos[index].completed = true;
		currentTodos[index].completed_at = dateTimeFormat();

		setTodos(currentTodos);

		success("Todo was completed");
	};

	const dateTimeFormat = () => {
		const date = new Date();

		return date.toDateString() + " " + date.toLocaleTimeString();
	};

	const resetTodos = () => {
		setTodos([]);

		success("Todos was reseted");
	};

	return (
		<Layout>
			<Notification />

			<TodoForm addTodo={addTodo} resetTodos={resetTodos} />

			<TodoList
				todos={todos}
				completeTask={(index) => completeTask(index)}
			/>
		</Layout>
	);
}
