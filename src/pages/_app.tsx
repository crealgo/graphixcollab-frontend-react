import '@fontsource/inter';
import {type AppProps} from 'next/app';
import Head from 'next/head';
import {AppStateContextProvider} from '../providers/AppStateContextProvider';
import {ThemeProvider} from '../providers/ThemeProvider';
import '../styles/global.css';

const App = ({Component, pageProps}: AppProps) => (
	<>
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
			/>
			<title>Graphix Collab</title>

			{/* META TAGS */}
			{/* <!-- HTML Meta Tags --> */}
			<meta
				name="description"
				content="OpenGraph Preview and generate open graph meta tags for any of your websites."
			/>

			{/* <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://graphixcollab.com" />
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content="OpenGraph - Preview Social Media Share and Generate Metatags"
			/>
			<meta
				property="og:description"
				content="OpenGraph Preview and generate open graph meta tags for any of your websites."
			/>
			<meta
				property="og:image"
				content="assets/brand/logo/chip@512w.webp"
			/>

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="opengraph.dev" />
			<meta property="twitter:url" content="https://graphixcollab.com" />
			<meta
				name="twitter:title"
				content="OpenGraph - Preview Social Media Share and Generate Metatags"
			/>
			<meta
				name="twitter:description"
				content="OpenGraph Preview and generate open graph meta tags for any of your websites."
			/>
			<meta
				name="twitter:image"
				content="assets/brand/logo/chip@512w.webp"
			/>

			{/* <!-- Meta Tags Generated via{'https://graphixcollab.com'}--> */}
		</Head>
		<ThemeProvider>
			<AppStateContextProvider>
				<Component {...pageProps} />
			</AppStateContextProvider>
		</ThemeProvider>
	</>
);

export default App;
