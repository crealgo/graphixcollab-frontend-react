import { useState, type FormEventHandler, useEffect, useRef } from 'react';

export const useForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [errors, setErrors] = useState<ApiErrorBag>({});
	const [response, setResponse] = useState<Response | null>(null);

	const form = useRef<HTMLFormElement | null>(null);

	const handleReset = () => {
		setIsSubmitting(false);
		setIsSubmitted(false);
		setIsSuccessful(false);
		setErrors({});
		setResponse(null);
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault();
		handleReset();

		setIsSubmitting(true);

		form.current = event.currentTarget;

		const action = new URL(form.current?.action);
		const apiUrl = new URL(process.env.apiUrl!);
		const requestUrl = new URL(
			`${apiUrl.pathname}/${process.env.busId!}${action.pathname}`,
			apiUrl.origin
		);

		// console.log('apiUrl', apiUrl);
		// console.log('action', action);
		// console.log('requestUrl', requestUrl.toString());

		(async () => {
			const formData = new FormData(event.currentTarget);

			console.log(Object.fromEntries(formData.entries()));

			const request = new Request(requestUrl.toString(), {
				method: form.current?.method,
				body: formData
			});

			const response = await fetch(request);

			setResponse(response);
			setIsSuccessful(response.ok);

			if (!response.ok) {
				const errors = (await response.json()) as ApiErrorBag;
				setErrors(errors);
			}

			setIsSubmitting(false);
			setIsSubmitted(true);
		})();
	};

	return {
		isSubmitting,
		isSubmitted,
		isSuccessful,
		response,
		errors,
		handleReset,
		handleSubmit
	};
};
