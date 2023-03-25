import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import {alpha, IconButton, styled, useControlled} from '@mui/material';
import {useId, type FC} from 'react';

interface DotsInputProps {
	currentIndex?: number;
	onIndexChange?: (index: number) => void;
	count: number;
	className?: string;
}

const dotWidth = '0.5rem';
const dotWidthExpanded = '1.5rem';
const controlGap = '0.125rem';

const DotsInputWrapper = styled('div')<Pick<DotsInputProps, 'count'>>(({theme, count}) => ({
	display: 'flex',
	gap: controlGap,
	alignItems: 'center',
	position: 'absolute',
	'.DotInput-dots': {
		display: 'flex',
		width: `calc((${count - 1} * ${dotWidth}) + (${count - 1} * ${controlGap}) + ${dotWidthExpanded})`,
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
				backgroundColor: alpha(theme.palette.primary.main, 0.5),
				border: 'solid 1px white',

				transition: 'width 300ms',
				transitionTimingFunction: theme.utils.transitions.easeInOut,
				cursor: 'pointer'
			},
			'&:hover::before': {
				opacity: 1
			},
			'&[data-checked=true]::before': {
				backgroundColor: alpha(theme.palette.primary.main, 1),
				width: dotWidthExpanded,
				cursor: 'default'
			},
			'input[type=radio]': {
				display: 'none',
				margin: 0
			}
		}
	}
}));

export const DotsInput: FC<DotsInputProps> = ({currentIndex, onIndexChange, count = 0, className}) => {
	const [index, setIndex] = useControlled({
		default: 0,
		controlled: currentIndex,
		name: 'Dots Input Index'
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
		<DotsInputWrapper className={'DotsInput-root'} count={count}>
			<IconButton size='small' onClick={goPrevious} color='primary'>
				<KeyboardArrowLeft />
			</IconButton>
			<div className='DotInput-dots'>
				{Array.from({length: count}, (_, radioIndex) => {
					const inputId = `${generatedId}-dot-input-${radioIndex}`;
					return (
						<label
							key={radioIndex}
							className='DotsInput-inputLabel'
							htmlFor={inputId}
							data-checked={index === radioIndex}
							title={`image-${radioIndex}`}
						>
							<input
								type='radio'
								className='DotsInput-input'
								key={radioIndex}
								id={inputId}
								value={radioIndex}
								name={radioGroupId}
								checked={index === radioIndex}
								onChange={() => {
									setIndex(radioIndex);
									onIndexChange?.(radioIndex);
								}}
							/>
						</label>
					);
				})}
			</div>
			<IconButton size='small' onClick={goNext} color='primary'>
				<KeyboardArrowRight />
			</IconButton>
		</DotsInputWrapper>
	);
};
