import {type NavItemOptions} from '@graphixcollab/types/general.d.ts';
import {useRouter} from 'next/router';

export const useNavigationItems = (): NavItemOptions[] => {
	const router = useRouter();

	const routes: Record<string, string> = {
		Home: '/',
		Services: '/services',
		'About Us': '/about',
		Estimate: '/estimate',
	};

	return Object.keys(routes).map(title => ({
		label: title,
		href: `${router.basePath}${routes[title]}`,
		selected: router.pathname === routes[title],
	}));
};
