import {type FC} from 'react';
import {Heading} from '../components/base/Heading';
import clsx from 'clsx';
import styled from '@emotion/styled';

const BaseElement = styled.div`
	&.has-top-gutter {
		margin-block-start: var(--spacing-6);
	}
`;

export const FormSectionTitle: FC<{
	readonly title: string;
	readonly hasTopGutter?: boolean;
}> = props => (
	<BaseElement
		className={clsx('FormSectionTitle-root', {
			'has-top-gutter': props.hasTopGutter,
		})}
	>
		<Heading level={4}>{props.title}</Heading>
		<hr/>
	</BaseElement>
);
