import { BookingService } from "../components/services/BookingService";
import { BannerService } from "../components/services/BannerService";
import { FC, PropsWithChildren, useLayoutEffect, useState } from "react";
import { AppStateContext, AppStateContextOptions as Context } from "../contexts/AppStateContext";
import { ContactService } from "../components/services/ContactService";

type AppStateContextProviderProps = PropsWithChildren<unknown>;

export const AppStateContextProvider: FC<AppStateContextProviderProps> = ({ children }) => {
	const [bannerOpen, setBannerOpen] = useState<Context["bannerOpen"]>(false);
	const [bookingOpen, setBookingOpen] = useState<Context["bookingOpen"]>(false);
	const [contactOpen, setContactOpen] = useState<Context["contactOpen"]>(false);
	const [BannerProps, setBannerProps] = useState<Context["BannerProps"]>({});

	const toggleBanner = (state?: boolean) => {
		if (typeof state === "boolean") {
			setBannerOpen(state);
		}

		setBannerOpen((curr) => !curr);
	};

	const toggleBooking = (state?: boolean) => {
		if (typeof state === "boolean") {
			setBookingOpen(state);
		}

		setBookingOpen((curr) => !curr);
	};

	const toggleContact = (state?: boolean) => {
		if (typeof state === "boolean") {
			setContactOpen(state);
		}

		setContactOpen((curr) => !curr);
	};

	useLayoutEffect(() => {
		if (BannerProps.title) {
			setBannerOpen(true);
		}
	}, [BannerProps.title]);

	return (
		<AppStateContext.Provider
			value={{
				BannerProps,
				bannerOpen,
				bookingOpen,
				contactOpen,
				setBannerProps,
				toggleBanner,
				toggleContact,
				toggleBooking,
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
			<ContactService
				open={contactOpen}
				onCloseClick={(event) => {
					toggleContact();
				}}
			/>
			<BookingService
				open={bookingOpen}
				onCloseClick={() => {
					toggleBooking();
				}}
			/>
			{children}
		</AppStateContext.Provider>
	);
};
