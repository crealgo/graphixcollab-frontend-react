import {
	useRef,
	useState,
	type ComponentPropsWithoutRef,
	type FC
} from 'react';
import { type Action, type SharedBlockProps } from '../../types/general';
import { Container } from '../base/Container';
import styles from './HeroBlock.module.scss';
import { Block } from '../base/Block';
import { Heading } from '../base/Heading';

export type Slide = {
	title: string;
	description: string;
	actions: Action[];
	image: string;
};

export type HeroBlockProps = {
	// color?: 'primary' | 'secondary' | 'grey' | 'none';
	slides?: Slide[];
	// ImageProps?: ImageProps;
} & ComponentPropsWithoutRef<'div'> &
	SharedBlockProps;

export const HeroBlock: FC = () => {
	return (
		<Container>
			<Block>
				<Heading level={1}>Welcome to Graphix Collab</Heading>
				<div className={styles.description} />
				<div className={styles.actionStack}>
					<div className={styles.action} />
				</div>
			</Block>
		</Container>
	);
};
