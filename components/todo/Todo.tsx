import { Dispatch, SetStateAction, useState } from 'react';
import Modal from './Modal';
import styles from './Todo.module.css';

interface Props {
	id: number;
	title: string;
	setTodos: Dispatch<SetStateAction<any>>;
}
const Todo: React.VFC<Props> = ({ id, title, setTodos }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className={styles.card}>
			<h2>{title}</h2>
			<div className={styles.actions}>
				<button className={styles.btn} onClick={() => setShowModal(true)}>
					Delete
				</button>
				{showModal && <Modal setShowModal={setShowModal} setTodos={setTodos} id={id} />}
			</div>
		</div>
	);
};

export default Todo;
