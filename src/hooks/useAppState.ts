import {AppStateContext} from '../contexts/AppStateContext';
import {type AppStateContextOptions} from '../contexts/AppStateContext';
import {useContext} from 'react';

type UseAppState = () => AppStateContextOptions;

export const useAppState: UseAppState = () => {
	const context = useContext(AppStateContext);

	if (context === undefined) {
		throw new Error('Not used inside the AppStateContextProvider!');
	}

	return context;
};
