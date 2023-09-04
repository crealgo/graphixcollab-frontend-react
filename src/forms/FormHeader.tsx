import styled from '@emotion/styled';
import {type FC, type PropsWithChildren, type ReactNode} from 'react';
import {Heading} from '../components/base/Heading';
import {Mark} from '../components/base/Mark';

type FormHeaderProps = PropsWithChildren<{
	readonly title: ReactNode;
	readonly instructions: ReactNode;
}>;

const HeaderElement = styled.header`
	display: grid;

	.FormHeader-instructions {
		font-style: normal;
		text-align: left;

		border-block-start: solid 2px var(--color-brand-magenta-lighter);

		margin-block-start: var(--spacing-2);
		padding-block-start: var(--spacing-2);
		margin-block-end: var(--spacing-6);

		* > mark {
			display: inline;
		}
	}
`;

export const FormHeader: FC<FormHeaderProps> = props => (
	<HeaderElement className='FormHeader-root'>
		<Heading level={2} className='FormHeader-title'>
			{props.title}
		</Heading>
		<p className='FormHeader-instructions'>
			<Mark color='magenta'>{props.instructions}</Mark>
		</p>
	</HeaderElement>
);
