import type { AppProps /* , AppContext */ } from 'next/app';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

// eslint-disable-next-line
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			{/* eslint-disable-next-line */}
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
