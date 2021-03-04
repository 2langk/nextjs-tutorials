import { createContext, useMemo, useState, Dispatch, SetStateAction } from 'react';

type Context = {
	likes: Array<string>;
	setLikes: Dispatch<SetStateAction<Array<string>>>;
};

const LikesContext = createContext<Context>({
	likes: [],
	setLikes: () => ({})
});

export const LikesContextProvider: React.FC = ({ children }) => {
	const [likes, setLikes] = useState<Array<string>>([]);

	const value = useMemo(() => ({ likes, setLikes }), [likes]);

	return <LikesContext.Provider value={{ ...value }}>{children}</LikesContext.Provider>;
};

export default LikesContext;
