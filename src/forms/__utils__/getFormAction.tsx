export const getFormAction = (action: string): string => {
	console.log({process})

	const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
	const appId = process.env.NEXT_PUBLIC_APP_ID!;

	console.log('getFormAction', `${apiUrl}/${appId}/${action}`);

	return `${apiUrl}/${appId}/${action}`;
};
