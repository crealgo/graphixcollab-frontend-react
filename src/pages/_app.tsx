import { type AppProps } from 'next/app';
import { SeoService } from '../components/service/SeoService';
import { AppStateContextProvider } from '../providers/AppStateContextProvider';
import { ThemeProvider } from '../providers/ThemeProvider';
import '../../tokens/build/tokens.css';
import 'normalize.css';
import '../styles/global.scss';

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
