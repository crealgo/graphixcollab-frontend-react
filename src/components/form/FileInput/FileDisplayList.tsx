import styled from '@emotion/styled';
import { type FC, type PropsWithChildren } from 'react';
import { Text } from '../../base/Text';

type Props = PropsWithChildren<{
	listTitle?: string;
}>;

const BaseElement = styled('ul')`
	list-style: none;
	margin: unset;
	width: 100%;
	padding-inline-start: 0;

	.FileDisplayList-title {
		font-size: 0.875rem;
		font-weight: 500;

		& + hr {
			margin-block-start: 0.125rem;
			margin-block-end: 0.5rem;
		}
	}
`;

export const FileDisplayList: FC<Props> = props => {
	return (
		<BaseElement>
			{props.listTitle && (
				<>
					<Text className="FileDisplayList-title">
						{props.listTitle}
					</Text>
					<hr />
				</>
			)}
			{props.children}
		</BaseElement>
	);
};
