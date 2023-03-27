import { BannerProps } from "@components/Banner";
import { createContext, Dispatch, SetStateAction } from "react";

export type AppStateContextOptions = {
	bannerOpen: boolean;
	bookingOpen: boolean;

	BannerProps: BannerProps;
	setBannerProps: Dispatch<SetStateAction<BannerProps>>;

	toggleBanner: (state?: boolean) => void;
	toggleContact: (state?: boolean) => void;
	toggleBooking: (state?: boolean) => void;
}

export const AppStateContext = createContext<AppStateContextOptions | undefined>(undefined)
