import { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import Meta from '../components/Meta';
import Todo from '../components/todo/Todo';

type Todos = Array<{ id: number; title: string }>;

const TodoPage: NextPage = () => {
	const [todos, setTodos] = useState<Todos>([]);

	useEffect(() => {
		setTodos([
			{ title: 'todos1', id: 1 },
			{ title: 'todos2', id: 2 },
			{ title: 'todos3', id: 3 },
			{ title: 'todos4', id: 4 }
		]);
	}, []);

	const todoInputRef = useRef<HTMLInputElement>(null);
	const createTodo = useCallback(
		(e) => {
			e.preventDefault();
			const newTodo = { id: new Date().getTime(), title: todoInputRef.current?.value || 'hi' };

			setTodos((prev) => [...prev, newTodo]);

			todoInputRef.current!.value = '';
			todoInputRef.current!.focus();
		},
		[setTodos]
	);

	return (
		<>
			<Meta title="My Todos" />
			<h1>My Todos</h1>
			<div style={{ marginBottom: '1rem' }}>
				<form action="#">
					<input type="text" ref={todoInputRef} placeholder="" />
					<button onClick={createTodo}>create</button>
				</form>
			</div>
			<div className="flex flex-row mx-auto">
				{todos.map((todo) => (
					<Todo key={todo.id} id={todo.id} title={todo.title} setTodos={setTodos} />
				))}
			</div>
		</>
	);
};

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
// 	const todos = [
// 		{ title: 'todos1', id: 1 },
// 		{ title: 'todos2', id: 2 },
// 		{ title: 'todos3', id: 3 },
// 		{ title: 'todos4', id: 4 }
// 	];

// 	return {
// 		props: {
// 			todos
// 		}
// 	};
// };

export default TodoPage;
