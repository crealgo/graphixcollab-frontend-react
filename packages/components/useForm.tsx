import {useState, type FormEventHandler} from 'react';

// Type FormStatus = 'idle' | 'submitting' | 'submitted' | 'successful';

export const useForm = () => {
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

	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault();

		handleReset();
		setIsSubmitting(true);

		// set up
		const form = event.currentTarget;
		const fileInputs = form.querySelectorAll<HTMLInputElement>('input[type="file"]');
		const formData = new FormData(event.currentTarget);

		// process files
		if (fileInputs.length) {
			const fileInputKeys = [...fileInputs].map(input => input.name);

			for await (const key of fileInputKeys) {
				if (formData.has(key)) {
					let fileIndex = 0;

					for await (const file of formData.getAll(key)) {
						formData.append(`${key}[${fileIndex}]`, file);
						fileIndex++;
					}

					formData.delete(key);
				}
			}
		}

		// send request
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

export type FormState = ReturnType<typeof useForm>;
