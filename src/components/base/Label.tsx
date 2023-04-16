import {type CSSObject, styled, type Theme} from '@mui/material';
import clsx from 'clsx';
import {type ComponentPropsWithoutRef, type FC} from 'react';

export type LabelProps = {
	variant?: 'primary' | 'secondary' | 'grey';
} & ComponentPropsWithoutRef<'span'>;

type LabelFuncParams = {
	theme: Theme;
} & LabelProps;

type LabelFunc = (params: LabelFuncParams) => CSSObject;

export const getLabelStyles: LabelFunc = ({theme, variant = 'primary'}) => {
	const colorHex = {
		primary: theme.palette.primary.main,
		secondary: theme.palette.secondary.main,
		grey: theme.palette.grey[300],
	}[variant];

	return {
		backgroundColor: colorHex,
		color: theme.palette.getContrastText(colorHex),
	};
};

const LabelWrapper = styled('span')<LabelProps>(({theme, variant = 'primary'}) => ({
	...getLabelStyles({theme, variant}),
	paddingInline: '1rem',
	paddingBlock: '0.5rem',
	borderRadius: '4px',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
	fontSize: theme.typography.body2.fontSize,
	fontWeight: 500,
	letterSpacing: '-0.0125rem',
}));

export const Label: FC<LabelProps> = ({className, children, ...props}) => (
	<LabelWrapper className={clsx(className, 'Label-root')} {...props}>
		{children}
	</LabelWrapper>
);
