import {AppStateContext} from '@graphixcollab/components/AppStateContext';
import {type AppStateContextOptions} from '@graphixcollab/components/AppStateContext';
import {useContext} from 'react';

type UseAppState = () => AppStateContextOptions;

export const useAppState: UseAppState = () => {
	const context = useContext(AppStateContext);

	if (context === undefined) {
		throw new Error('Not used inside the AppStateContextProvider!');
	}

	return context;
};
