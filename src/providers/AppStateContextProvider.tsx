import {type FC, type PropsWithChildren, useEffect, useLayoutEffect, useState} from 'react';
import {BannerService} from '../components/service/BannerService';
import {ContactService} from '../components/service/ContactService';
import {SquareBookingService} from '../components/service/SquareBookingService';
import {AppStateContext, type AppStateContextOptions as Context} from '../contexts/AppStateContext';

type AppStateContextProviderProps = PropsWithChildren;

export const AppStateContextProvider: FC<AppStateContextProviderProps> = ({children}) => {
	const [bannerOpen, setBannerOpen] = useState<Context['bannerOpen']>(false);
	const [bookingOpen, setBookingOpen] = useState<Context['bookingOpen']>(false);
	const [contactOpen, setContactOpen] = useState<Context['contactOpen']>(false);
	const [BannerProps, setBannerProps] = useState<Context['BannerProps']>({});

	const toggleBanner = (state?: boolean) => {
		if (typeof state === 'boolean') {
			setBannerOpen(state);
		}

		setBannerOpen(curr => !curr);
	};

	const toggleBooking = (state?: boolean) => {
		if (typeof state === 'boolean') {
			setBookingOpen(state);
		}

		setBookingOpen(curr => !curr);
	};

	const toggleContact = (state?: boolean) => {
		if (typeof state === 'boolean') {
			setContactOpen(state);
		}

		setContactOpen(curr => !curr);
	};

	useEffect(() => {
		if (BannerProps.text) {
			setBannerOpen(true);
		}
	}, [BannerProps.text]);

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
				BannerProps={{
					onCloseClick(event) {
						BannerProps?.onCloseClick?.(event);
						toggleBanner();
					},
				}}
			/>
			<ContactService
				open={contactOpen}
				onCloseClick={event => {
					toggleContact();
				}}
			/>
			{/* <SquareBookingService
				open={bookingOpen}
				onCloseClick={() => {
					toggleBooking();
				}}
			/> */}
			{children}
		</AppStateContext.Provider>
	);
};
