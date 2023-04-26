import {useRef, type FC} from 'react';
import {Block} from '../../base/Block';
import {Container} from '../../base/Container';
import {SlideBackground, type Slide} from './IntroBlock';

type Props = {
	slides?: Slide[];
	className?: string;
	children?: React.ReactNode;
};
export const MultipleSlidesContainer: FC<Props> = ({
	className,
	slides,
	children
}) => {
	const blockRef = useRef<HTMLDivElement>(null);

	return (
		<Container>
			<Block ref={blockRef} isRounded className={className}>
				{children}
			</Block>
			{slides?.map((_, key) => (
				<SlideBackground key={key} />
			))}
		</Container>
	);
};
