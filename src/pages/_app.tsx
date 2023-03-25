import {ThemeProvider} from '@components/ThemeProvider';
import {type AppProps} from 'next/app';
import Head from 'next/head';

import '@fontsource/inter';

const App = ({Component, pageProps}: AppProps) => (
	<>
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0' />
		</Head>
		<ThemeProvider>
			<Component {...pageProps} />;
		</ThemeProvider>
	</>
);

export default App;
