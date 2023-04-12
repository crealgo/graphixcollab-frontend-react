import { ButtonProps } from "../components/base/Button";
import { type ActionStackProps } from "../components/base/ActionStack";
import { BannerProps } from "../components/base/Banner";
import { FooterBlockProps } from "../components/blocks/FooterBlock";
import { HeaderProps } from "../components/base/Header";
import { BlockOptions } from "../utils/generateBlocks";
import { type MouseEventHandler } from "react";
import { StaticImageData } from "next/image";

export type LoadingStatus = "loading" | "loaded" | "error";

export type Size = "small" | "medium" | "large";

export type Action<T = HTMLElement> = {
	href?: string;
	label?: string;
	onClick?: MouseEventHandler<T>;
} & Pick<ButtonProps, "startIcon" | "endIcon" | "color" | "size">;

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

export type OptionValue = {
	label: string;
	value: string;
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

export type NavItemOptionsWithoutSubItems = Omit<NavItemOptions, "subItems">;

export type ServiceOptions = {
	title?: string;
	subtitle?: string;
	description?: string;
	imageSrc?: string | StaticImageData;
};

export type SharedBlockProps = {
	title?: string;
	subtitle?: string;
	description?: string;
	actions?: Action[];
	ActionStackProps?: ActionStackProps;
};

export type PageProps = {
	layout: {
		header: HeaderProps;
		banner: BannerProps;
		footer: FooterBlockProps;
	};
	blocks: BlockOptions[];
};
