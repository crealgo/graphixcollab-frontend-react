import {type AppProps} from 'next/app';
import {SeoService} from '@graphixcollab/components/SeoService';
import {AppStateContextProvider} from '@graphixcollab/components/AppStateContextProvider';
import {ThemeProvider} from '@graphixcollab/components/ThemeProvider';
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
