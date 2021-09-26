import React from "react";

// Reactstrap
import { List, ListGroupItem, Button, Badge } from "reactstrap";

function TodoList({ todos, completeTask }) {
	return (
		<List className="mt-3 p-0">
			{todos.map(function (todo, index) {
				return (
					<ListGroupItem
						className="d-flex align-items-center justify-content-between"
						disabled={todo.completed}
						key={index}
					>
						{todo.todo}

						{!todo.completed ? (
							<Button
								size="sm"
								color="success"
								className="float-right"
								onClick={() => completeTask(index)}
							>
								Mark as completed
							</Button>
						) : (
							<Badge className="text-black-50">
								Completed at: {todo.completed_at}
							</Badge>
						)}
					</ListGroupItem>
				);
			})}
		</List>
	);
}

export default TodoList;
