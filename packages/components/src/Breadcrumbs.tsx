import MuiBreadcrumbs, {
	type BreadcrumbsProps as MuiBreadcrumbsProps,
} from '@mui/material/Breadcrumbs';
import {forwardRef} from 'react';
import {Link} from './Link';

export type BreadcrumbOptions = {
	type?: 'link';
	label?: string;
	href?: string;
};

type BreadcrumbsProps = {
	readonly items?: BreadcrumbOptions[];
} & MuiBreadcrumbsProps;

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
	({children, items, ...props}, ref) => (
		<MuiBreadcrumbs {...props} ref={ref}>
			{children
				?? items?.map(({label, ...props}, itemIndex) => (
					<Link key={itemIndex} href='#' {...props}>
						{label}
					</Link>
				))}
		</MuiBreadcrumbs>
	),
);

Breadcrumbs.displayName = 'Breadcrumbs';
