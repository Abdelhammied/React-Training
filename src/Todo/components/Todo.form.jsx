import React, { useState } from "react";

// UI Components
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

import { error, success } from "../notifications";

export default function TodoForm(props) {
	const [todo, setTodo] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (todo == "") {
			error("Todo is empty.");

			return;
		}

		props.addTodo(todo);

		success('Todo was added.')

		setTodo("");
	};

	return (
		<Form onSubmit={handleFormSubmit}>
			<FormGroup className="mb-2">
				<Label>Todo</Label>
				<Input
					placeholder="Add todo"
					type="text"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
			</FormGroup>

			<Button
				type="submit"
				color="primary"
				style={{ marginRight: "2px" }}
			>
				Add Todo
			</Button>

			<Button
				type="button"
				color="danger"
				onClick={(e) => props.resetTodos()}
			>
				Reset Todos
			</Button>
		</Form>
	);
}
