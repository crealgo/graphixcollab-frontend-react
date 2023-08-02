export const getFormAction = (action: string): string => {
	const apiUrl = import.meta.env.NEXT_PUBLIC_API_URL as string;
	const appId = import.meta.env.NEXT_PUBLIC_APP_ID as string;

	return `${apiUrl}/${appId}/${action}`;
};
