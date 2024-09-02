import {
	useEffect,
	useMemo,
	useState,
	type FC,
	type PropsWithChildren,
} from 'react';
import {ContactService} from '@graphixcollab/components/ContactService';
import {
	AppStateContext,
	type AppStateContextOptions as Context,
} from '@graphixcollab/components/AppStateContext';

type AppStateContextProviderProps = PropsWithChildren;

export const AppStateContextProvider: FC<AppStateContextProviderProps> = ({
	children,
}) => {
	const [bannerOpen, setBannerOpen] = useState<Context['bannerOpen']>(false);
	const [bookingOpen, setBookingOpen]
		= useState<Context['bookingOpen']>(false);
	const [contactOpen, setContactOpen]
		= useState<Context['contactOpen']>(false);
	const [bannerProps, setBannerProps] = useState<Context['BannerProps']>({});

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

	const defaultContext = useMemo<Context>(
		() => ({
			BannerProps: bannerProps,
			bannerOpen,
			bookingOpen,
			contactOpen,
			setBannerProps,
			toggleBanner,
			toggleContact,
			toggleBooking,
		}),
		[bannerOpen, bannerProps, bookingOpen, contactOpen],
	);

	useEffect(() => {
		if (bannerProps.text) {
			setBannerOpen(true);
		}
	}, [bannerProps.text]);

	return (
		<AppStateContext.Provider value={defaultContext}>
			{/* <BannerService
				{...bannerProps}
				open={bannerOpen}
				BannerProps={{
					onCloseClick(event) {
						bannerProps?.onCloseClick?.(event);
						toggleBanner();
					}
				}}
			/> */}
			<ContactService
				isOpen={contactOpen}
				onCloseClick={() => {
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
