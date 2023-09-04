import {ArrowBack, ArrowForward} from '@mui/icons-material';
import {IconButton, styled, useControlled} from '@mui/material';
import {useId, type FC} from 'react';

type DotsInputProps = {
	readonly currentIndex?: number;
	readonly onIndexChange?: (index: number) => void;
	readonly count: number;
	// className?: string;
};

const dotWidth = '0.5rem';
const dotWidthExpanded = '1.5rem';
const controlGap = '0.125rem';

const DotsInputWrapper = styled('div')<Pick<DotsInputProps, 'count'>>(
	({count}) => ({
		display: 'flex',
		gap: controlGap,
		alignItems: 'center',
		position: 'absolute',
		'.DotInput-dots': {
			display: 'flex',
			width: `calc((${count - 1} * ${dotWidth}) + (${
				count - 1
			} * ${controlGap}) + ${dotWidthExpanded})`,
			gap: controlGap,
			alignItems: 'center',
			justifyContent: 'center',

			label: {
				'&::before': {
					content: '""',
					display: 'block',

					borderRadius: '9999px',
					height: dotWidth,
					width: dotWidth,
					backgroundColor: 'var(--color-brand-primary-main)',
					border: 'solid 1px white',

					transition: 'width 300ms',
					cursor: 'pointer',
				},
				'&:hover::before': {
					opacity: 1,
				},
				'&[data-checked=true]::before': {
					backgroundColor: 'var(--color-brand-primary-main)',
					width: dotWidthExpanded,
					cursor: 'default',
				},
				'input[type=radio]': {
					display: 'none',
					margin: 0,
				},
			},
		},
	}),
);

export const DotsInput: FC<DotsInputProps> = ({
	currentIndex,
	onIndexChange,
	count = 0,
}) => {
	const [index, setIndex] = useControlled({
		default: 0,
		controlled: currentIndex,
		name: 'Dots Input Index',
	});

	const goPrevious = () => {
		console.log('clicked');

		let newIndex = index - 1;

		if (index === 0) {
			newIndex = count - 1;
		}

		setIndex(newIndex);
		onIndexChange?.(newIndex);
	};

	const goNext = () => {
		let newIndex = index + 1;

		if (index === count - 1) {
			newIndex = 0;
		}

		setIndex(newIndex);
		onIndexChange?.(newIndex);
	};

	const generatedId = useId();
	const radioGroupId = `${generatedId}-dot-input`;

	return (
		<DotsInputWrapper className='DotsInput-root' count={count}>
			<IconButton size='small' color='primary' onClick={goPrevious}>
				<ArrowBack/>
			</IconButton>
			<div className='DotInput-dots'>
				{Array.from({length: count}, (_, radioIndex) => (
					<input
						key={radioIndex}
						type='radio'
						className='DotsInput-input'
						value={radioIndex}
						aria-label={radioGroupId}
						name={radioGroupId}
						checked={index === radioIndex}
						onChange={() => {
							setIndex(radioIndex);
							onIndexChange?.(radioIndex);
						}}
					/>
				))}
			</div>
			<IconButton size='small' color='primary' onClick={goNext}>
				<ArrowForward/>
			</IconButton>
		</DotsInputWrapper>
	);
};
