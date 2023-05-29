import Head from 'next/head';
import {type FC} from 'react';

type Props = {
	text?: string;
};

export const PageTitle: FC<Props> = props => {
	const resolvedPageTitle = props.text
		? `${props.text} | Graphix Collab`
		: 'Graphix Collab';

	return (
		<Head>
			<title>{resolvedPageTitle}</title>
		</Head>
	);
};
