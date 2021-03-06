import { ReactNode } from 'react';
import Meta from './Meta';

type LayoutProps = {
	children: ReactNode;
	title?: string;
	keywords?: string;
	description?: string;
};

const Header: React.VFC<unknown> = () => {
	return (
		<h1 className="title">
			<span>Header</span> Title
		</h1>
	);
};

const Layoyut: React.FC<LayoutProps> = ({ children, title, keywords, description }) => {
	return (
		<>
			<Meta title={title} keywords={keywords} description={description} />
			<Header />
			{children}
		</>
	);
};

export default Layoyut;
