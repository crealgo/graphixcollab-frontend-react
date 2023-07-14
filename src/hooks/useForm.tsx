import path from 'path';
import { useState, type FormEventHandler } from 'react';

type FormState = {
	isSubmitting: boolean;
	isSubmitted: boolean;
	isSuccessful: boolean;
	response: Response | null;
	errors: Record<string, string[]>;
	handleReset: () => void;
	handleSubmit: FormEventHandler<HTMLFormElement>;
};

export const useForm = (): FormState => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [errors, setErrors] = useState<ApiErrorBag>({});
	const [response, setResponse] = useState<Response | null>(null);

	const handleReset = () => {
		setIsSubmitting(false);
		setIsSubmitted(false);
		setIsSuccessful(false);
		setErrors({});
		setResponse(null);
	};

	const submitForm = async (url: string, formElement: HTMLFormElement) => {
		const formData = new FormData(formElement);

		console.log(Object.fromEntries(formData.entries()));

		const request = new Request(url, {
			method: formElement.method,
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
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault();
		handleReset();

		setIsSubmitting(true);

		const { pathname: action } = new URL(event.currentTarget.action);
		const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
		const apiId = process.env.NEXT_PUBLIC_API_ID!;

		const endpoint = path.join(`api/${apiId}`, action);
		const requestUrl = new URL(endpoint, apiUrl);

		void submitForm(requestUrl.toString(), event.currentTarget);
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
