import MuiBreadcrumbs, {type BreadcrumbsProps as MuiBreadcrumbsProps} from '@mui/material/Breadcrumbs';
import {forwardRef} from 'react';

export type BreadcrumbOptions = {
	type?: 'link';
	label?: string;
	href?: string;
};

type BreadcrumbsProps = {
	items?: BreadcrumbOptions[];
} & MuiBreadcrumbsProps;

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(({children, items, ...props}, ref) => (
	<MuiBreadcrumbs {...props} ref={ref}>
		{children ?? items?.map(({href, label}, itemIndex) => <span key={itemIndex}>{label}</span>)}
	</MuiBreadcrumbs>
));

Breadcrumbs.displayName = 'Breadcrumbs';
