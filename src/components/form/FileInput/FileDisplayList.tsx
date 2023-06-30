import styled from '@emotion/styled';
import { type PropsWithChildren, type FC } from 'react';
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
		margin-block-end: var(--spacing-2);
	}
`;

export const FileDisplayList: FC<Props> = props => {
	return (
		<BaseElement>
			{props.listTitle && (
				<Text className="FileDisplayList-title">{props.listTitle}</Text>
			)}
			{props.children}
		</BaseElement>
	);
};
