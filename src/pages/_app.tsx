import {ThemeProvider} from '../providers/ThemeProvider';
import {AppStateContextProvider} from '../providers/AppStateContextProvider';
import '@fontsource/inter';
import {type AppProps} from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import {DefaultSeo} from 'next-seo';

const App = ({Component, pageProps}: AppProps) => (
	<>
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
			/>
			<title>Graphix Collab</title>
		</Head>
		<ThemeProvider>
			<AppStateContextProvider>
				<Component {...pageProps} />
			</AppStateContextProvider>
		</ThemeProvider>
	</>
);

export default App;
