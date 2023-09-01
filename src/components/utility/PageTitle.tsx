import Head from 'next/head';
import {type FC} from 'react';

export type PageTitleProps = {
	readonly text?: string;
};

export const PageTitle: FC<PageTitleProps> = props => {
	const resolvedPageTitle = props.text ? `${props.text} | Graphix Collab` : 'Graphix Collab';

	return (
		<Head>
			<title>{resolvedPageTitle}</title>
		</Head>
	);
};
