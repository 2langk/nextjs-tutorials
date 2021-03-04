import Link from 'next/link';
import { useContext } from 'react';
import styles from './Nav.module.css';
import LikesContext from './contexts/LikesContext';

const Nav: React.VFC = () => {
	const { likes } = useContext(LikesContext);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>React Meetings</div>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a href="">Index</a>
						</Link>
					</li>
					<li>
						<Link href="/todo">
							<a href="">Todo</a>
						</Link>
					</li>
					<li style={{ color: 'white' }}>Likes: {likes.length}</li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
