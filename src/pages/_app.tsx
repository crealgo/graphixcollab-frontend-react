import {type AppProps} from 'next/app';
import {SeoService} from '@graphixcollab/components/SeoService.tsx';
import {AppStateContextProvider} from '@graphixcollab/components/AppStateContextProvider.tsx';
import {ThemeProvider} from '@graphixcollab/components/ThemeProvider.tsx';
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
