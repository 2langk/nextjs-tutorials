import { Dispatch, MouseEvent, SetStateAction, useCallback, useRef } from 'react';
import styles from '../../styles/Todo.module.css';

interface Props {
	id: number;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setTodos: Dispatch<SetStateAction<any>>;
}

const Modal: React.VFC<Props> = ({ id, setShowModal, setTodos }) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	const closeModal = useCallback(
		(e: MouseEvent) => {
			if (e.target === overlayRef.current || e.target === closeButtonRef.current) {
				setShowModal(false);
			}
		},
		[setShowModal]
	);

	const deleteTodo = useCallback(
		(todoId: number) => {
			setTodos((prev: any) => prev.filter((todo: any) => todo.id !== todoId));
		},
		[setTodos]
	);

	return (
		// eslint-disable-next-line
		<div className={styles.backdrop} ref={overlayRef} onClick={closeModal}>
			<div className={styles.modal}>
				<p>Are you sure?</p>
				<button className={`${styles.btn} ${styles.btnAlt}`} ref={closeButtonRef} onClick={closeModal}>
					Cancel
				</button>
				<button className={`${styles.btn}`} onClick={() => deleteTodo(id)}>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default Modal;
