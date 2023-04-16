import {Banner, type BannerProps} from '../base/Banner';
import Collapse from '@mui/material/Collapse';
import {type FC, type PropsWithChildren} from 'react';

type BannerServiceProps = PropsWithChildren<{
	open?: boolean;
	BannerProps?: BannerProps;
}>;

export const BannerService: FC<BannerServiceProps> = ({open, children, BannerProps}) => (
	<Collapse in={open}>{children ?? <Banner {...BannerProps}/>}</Collapse>
);
