import { useContext } from 'react';
import styles from './MeetItem.module.css';
import LikesContext from './contexts/LikesContext';

type Props = {
	meet: {
		id: string;
		title: string;
		address: string;
		description: string;
		image: string;
	};
};

const MeetItem: React.VFC<Props> = ({ meet }) => {
	const { likes, setLikes } = useContext(LikesContext);

	const isLike = likes.includes(meet.id);

	const likeHandler = () => {
		if (isLike) {
			setLikes((prev) => prev.filter((item) => item !== meet.id));
		} else {
			setLikes((prev) => [...prev, meet.id]);
		}
	};

	return (
		<>
			<div className={styles.item}>
				<img className={styles.image} src={meet.image} alt="images" />
			</div>
			<div className={styles.content}>
				<h3>{meet.title}</h3>
				<p>{meet.address}</p>
				<p>{meet.description}</p>
			</div>
			<div className={styles.actions}>
				<button onClick={likeHandler}>{isLike ? 'Unlike' : 'Like'}</button>
			</div>
		</>
	);
};

export default MeetItem;
