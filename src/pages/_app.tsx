// import '@fontsource/inter';
// import '@fontsource/inter-tight';
import { type AppProps } from 'next/app';
import { SeoService } from '../components/service/SeoService';
import { AppStateContextProvider } from '../providers/AppStateContextProvider';
import { ThemeProvider } from '../providers/ThemeProvider';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<SeoService />
		<ThemeProvider>
			<AppStateContextProvider>
				<Component {...pageProps} />
			</AppStateContextProvider>
		</ThemeProvider>
	</>
);

export default App;
