import {useState, type FormEventHandler} from 'react';

type FormState = {
	// TODO: change boolean to enum status e.g. 'idle' | 'submitting' | 'submitted' | 'successful'
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

	const submitForm = async (form: HTMLFormElement) => {
		const formData = new FormData(form);

		const response = await fetch(form.action, {
			method: form.method,
			body: formData,
		});

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

		void submitForm(event.currentTarget);
	};

	return {
		isSubmitting,
		isSubmitted,
		isSuccessful,
		response,
		errors,
		handleReset,
		handleSubmit,
	};
};
