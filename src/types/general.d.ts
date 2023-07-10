import { type StaticImageData } from 'next/image';
import { type MouseEventHandler, type ReactNode } from 'react';
import { type ActionStackProps } from '../components/base/ActionStack';
import { type ButtonProps } from '../components/base/Button';
import { type CalloutBlockProps } from '../components/block/CalloutBlock';
import { type FanServiceBlockProps } from '../components/block/FanServiceBlock';
import { type FaqBlockProps } from '../components/block/FaqBlock';
import { type FeaturedInBlockProps } from '../components/block/FeaturedInBlock';
import { type FooterBlockProps } from '../components/block/FooterBlock';
import { type GalleryBlockProps } from '../components/block/GalleryBlock';
import { type HighlightBlockProps } from '../components/block/HighlightBlock';
import { type InteractiveEstimatorProps } from '../components/block/InteractiveEstimator';
import { type IntroBlockProps } from '../components/block/IntroBlock/IntroBlock';
import { type NewsBlockProps } from '../components/block/NewsBlock';
import { type PageHeaderBlockProps } from '../components/block/PageHeaderBlock';
import { type PlaceholderBlockProps } from '../components/block/PlaceholderBlock';
import { type ProfilesBlockProps } from '../components/block/ProfilesBlock';
import { type ServicesBlockProps } from '../components/block/ServicesBlock';
import { type ServicesPreviewBlockProps } from '../components/block/ServicesPreviewBlock';
import { type SocialMediaBlockProps } from '../components/block/SocialMediaBlock';
import { type TimelineBlockProps } from '../components/block/TimelineBlock';
import { type YelpBlockProps } from '../components/block/YelpBlock';

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
