import {useEffect, useRef, useState} from 'react';

type Options = {
	readonly intervalTime?: number;
	readonly startImmediately?: boolean;
};

type HookFunction = (
	arrayLength: number,
	defaultValue?: number,
	options?: Options,
) => [
	index: number,
	go: {
		to: (newIndex: number) => void;
		next: () => void;
		previous: () => void;
		play: () => void;
		pause: () => void;
		reset: (to?: number) => void;
	},
];

// eslint-disable-next-line @typescript-eslint/default-param-last
export const useCarouselIndex: HookFunction = (arrayLength, defaultValue = 0, options) => {
	const [index, setIndex] = useState(defaultValue);

	const interval = useRef<Timer | null>(null);

	const play = () => {
		interval.current = setInterval(() => {
			setIndex(currentIndex => {
				if (currentIndex === arrayLength - 1) {
					return 0;
				}

				return currentIndex + 1;
			});
		}, options?.intervalTime ?? 5000);
	};

	const pause = () => {
		if (interval.current) {
			clearInterval(interval.current);
			interval.current = null;
		}
	};

	const reset = (to = 0) => {
		setIndex(to ?? defaultValue);
	};

	const to = (newIndex: number) => {
		pause();
		setIndex(newIndex);
		play();
	};

	const next = () => {
		pause();
		setIndex(currentIndex => currentIndex === arrayLength - 1 ? 0 : currentIndex + 1);
		play();
	};

	const previous = () => {
		pause();
		setIndex(currentIndex => currentIndex === 0 ? arrayLength - 1 : currentIndex - 1);
		play();
	};

	useEffect(() => {
		if (options?.startImmediately) {
			play();

			return () => {
				pause();
			};
		}
	}, []);

	return [
		index,
		{
			to,
			next,
			previous,
			play,
			pause,
			reset,
		},
	];
};
