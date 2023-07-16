export const getFormAction = (action: string): string => {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
	const appId = process.env.NEXT_PUBLIC_APP_ID!;

	return `${apiUrl}/${appId}/${action}`;
};
