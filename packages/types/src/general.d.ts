import {type StaticImageData} from 'next/image';
import {type MouseEventHandler, type ReactNode} from 'react';
import {type ActionStackProps} from '@graphixcollab/components/ActionStack.tsx';
import {type ButtonProps} from '@graphixcollab/components/Button.tsx';
import {type CalloutBlockProps} from '@graphixcollab/components/CalloutBlock.tsx';
import {type FanServiceBlockProps} from '@graphixcollab/components/FanServiceBlock.tsx';
import {type FaqBlockProps} from '@graphixcollab/components/FaqBlock.tsx';
import {type FeaturedInBlockProps} from '@graphixcollab/components/FeaturedInBlock.tsx';
import {type FooterBlockProps} from '@graphixcollab/components/FooterBlock.tsx';
import {type GalleryBlockProps} from '@graphixcollab/components/GalleryBlock.tsx';
import {type HighlightBlockProps} from '@graphixcollab/components/HighlightBlock.tsx';
import {type InteractiveEstimatorProps} from '@graphixcollab/components/InteractiveEstimator.tsx';
import {type IntroBlockProps} from '@graphixcollab/components/IntroBlock.tsx';
import {type NewsBlockProps} from '@graphixcollab/components/NewsBlock.tsx';
import {type PageHeaderBlockProps} from '@graphixcollab/components/PageHeaderBlock.tsx';
import {type PlaceholderBlockProps} from '@graphixcollab/components/PlaceholderBlock.tsx';
import {type ProfilesBlockProps} from '@graphixcollab/components/ProfilesBlock.tsx';
import {type ServicesBlockProps} from '@graphixcollab/components/ServicesBlock.tsx';
import {type ServicesPreviewBlockProps} from '@graphixcollab/components/ServicesPreviewBlock.tsx';
import {type SocialMediaBlockProps} from '@graphixcollab/components/SocialMediaBlock.tsx';
import {type TimelineBlockProps} from '@graphixcollab/components/TimelineBlock.tsx';
import {type YelpBlockProps} from '@graphixcollab/components/YelpBlock.tsx';

export type LoadingStatus = 'loading' | 'loaded' | 'error';

export type Action<T = HTMLElement> = {
	href?: string;
	label?: string;
	onClick?: MouseEventHandler<T>;
} & Pick<ButtonProps, 'startIcon' | 'endIcon' | 'color' | 'size'>;

export type Person = {
	avatar: string;
	photo?: string;
	name: string;
	username: string;
};

export type PersonGroup = {
	title?: string;
	description?: string;
	profiles?: Person[];
};

export type Employee = Person & {
	employeeId: string;
	jobTitle: string;
	interests: string[];
};

export type EmployeeGroup = {
	title?: string;
	description?: string;
	profiles?: Employee[];
};

export type Article = {
	author: Person;
	postDate: string;
	summary: string;
	tags: string[];
	title: string;
	url: string;
};

export type Term = {
	term: string;
	description: string;
};

export type SimpleLink = {
	href?: string;
	text?: string;
};

export type NavItemOptions = {
	label?: string;
	href?: string;
	selected?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	subItems?: NavItemOptions[];
};

export type NavItemOptionsWithoutSubItems = Omit<NavItemOptions, 'subItems'>;

export type ServiceOptions = {
	title?: string;
	subtitle?: string;
	description?: string;
	imageSrc?: string | StaticImageData;
};

export type SharedBlockProps = {
	title?: ReactNode;
	subtitle?: ReactNode;
	description?: ReactNode;
	actions?: Action[];
	ActionStackProps?: ActionStackProps;
};

export type PageProps = Partial<{
	[other: string]: any;
	CalloutBlockProps: CalloutBlockProps;
	FanServiceBlockProps: FanServiceBlockProps;
	FaqBlockProps: FaqBlockProps;
	FeaturedInBlockProps: FeaturedInBlockProps;
	FooterBlockProps: FooterBlockProps;
	GalleryBlockProps: GalleryBlockProps;
	HighlightBlockProps: HighlightBlockProps;
	InteractiveEstimatorProps: InteractiveEstimatorProps;
	IntroBlockProps: IntroBlockProps;
	NewsBlockProps: NewsBlockProps;
	PageHeaderBlockProps: PageHeaderBlockProps;
	PlaceholderBlockProps: PlaceholderBlockProps;
	ProfilesBlockProps: ProfilesBlockProps;
	ServicesBlockProps: ServicesBlockProps;
	ServicesPreviewBlockProps: ServicesPreviewBlockProps;
	SocialMediaBlockProps: SocialMediaBlockProps;
	TimelineBlockProps: TimelineBlockProps;
	YelpBlockProps: YelpBlockProps;
}>;

export type ActionBag = {
	label: string;
	href?: string;
	action?: string;
} & Pick<ButtonProps, 'startIcon' | 'endIcon' | 'color' | 'size'>;
