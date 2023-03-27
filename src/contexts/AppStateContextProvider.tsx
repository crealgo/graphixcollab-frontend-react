import { BookingService } from "@components/BookingService";
import { BannerService } from "@components/BannerService";
import { FC, PropsWithChildren, useLayoutEffect, useState } from "react";
import { AppStateContext, AppStateContextOptions as Context } from "./AppStateContext";

type AppStateContextProviderProps = PropsWithChildren<unknown>

export const AppStateContextProvider: FC<AppStateContextProviderProps> = ({
	children
}) => {
	const [bannerOpen, setBannerOpen] = useState<Context['bannerOpen']>(false);
	const [bookingOpen, setBookingOpen] = useState<Context['bookingOpen']>(false);
	const [BannerProps, setBannerProps] = useState<Context['BannerProps']>({});

	const toggleBanner = (state?: boolean) => {
		if (typeof state === 'boolean') {
			setBannerOpen(() => state);
		}

		setBannerOpen((curr) => !curr)
	}

	const toggleBooking = (state?: boolean) => {
		if (typeof state === 'boolean') {
			setBookingOpen(() => state);
		}

		setBookingOpen((curr) => !curr)
	}

	useLayoutEffect(() => {
		if (BannerProps.title) {
			setBannerOpen(true)
		}
	}, [BannerProps.title])

	return (
		<AppStateContext.Provider
			value={{
				BannerProps,
				bannerOpen,
				bookingOpen,
				setBannerProps,
				toggleBanner,
				// toggleContact,
				toggleBooking
			}}
		>
			<BannerService
				{...BannerProps}
				open={bannerOpen}
				onCloseClick={(event) => {
					BannerProps?.onCloseClick?.(event);
					toggleBanner();
				}}
			/>
			<BookingService
				open={bookingOpen}
				onCloseClick={() => {
					toggleBooking()
				}}
			/>
			{children}
		</AppStateContext.Provider>
	);
};
