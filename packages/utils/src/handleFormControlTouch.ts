import {type SyntheticEvent} from 'react';

export const handleFormControlTouch = (event: SyntheticEvent<HTMLElement>) => {
	if (event.type === 'touched') {
		event.stopPropagation();

		[
			event.currentTarget,
			...event.currentTarget.querySelectorAll(
				'.input-label, .input-helper-text',
			),
		].forEach(el => {
			el.classList.add('touched');
		});
	}
};
