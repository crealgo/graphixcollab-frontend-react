import {type NavItemOptions} from '../types/general';
import {useRouter} from 'next/router';

export const useNavigationItems = (): NavItemOptions[] => {
	const router = useRouter();

	const routes: Record<string, string> = {
		'Home': '/',
		'About Us': '/about',
		'Graphix Collab': '/graphix-collab',
		'Services': '/services'
	};

	return Object.keys(routes).map(title => ({
		label: title,
		href: routes[title],
		selected: router.pathname === routes[title]
	}));
};
