import { ReactNode } from 'react';
import Meta from '../Meta';
import Nav from './Nav';

type LayoutProps = {
	children: ReactNode;
	title?: string;
	keywords?: string;
	description?: string;
};

const Layoyut: React.FC<LayoutProps> = ({ children, title, keywords, description }) => {
	return (
		<>
			<Meta title={title} keywords={keywords} description={description} />
			<Nav />
			{children}
		</>
	);
};

export default Layoyut;
