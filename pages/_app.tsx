import {type AppProps} from 'next/app';
import {SeoService} from '../components/service/SeoService';
import {AppStateContextProvider} from '../src/providers/AppStateContextProvider';
import {ThemeProvider} from '../providers/ThemeProvider';
import 'normalize.css';
import '@hotcakes/tokens/lib/tokens.css';
import '../styles/index.scss';

const App = ({Component, pageProps}: AppProps) => (
	<>
		<SeoService/>
		<ThemeProvider>
			<AppStateContextProvider>
				<Component {...pageProps}/>
			</AppStateContextProvider>
		</ThemeProvider>
	</>
);

export default App;
