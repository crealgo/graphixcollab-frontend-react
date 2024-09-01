import {test} from '@playwright/test';
import {paramCase} from 'change-case';

const devUrl = 'http://localhost:3000';

const pages = [
	'/',
	'/about',
	'/book-appointment',
	'/contact-us',
	'/estimate',
	'/services',
	'/terms/privacy-policy',
	'/terms/terms-and-conditions',
];

pages.forEach(path => {
	const pageName = path === '/' ? 'home' : path.replace('/', '');

	test(`${pageName} page`, async ({page}, {project}) => {
		await page.goto(`${devUrl}${path}`);
		await page.waitForTimeout(3000);

		const projectName = paramCase(project.name);

		await page.screenshot({
			fullPage: true,
			path: `__tests__/__snapshots__/20230725/${pageName}/${projectName}.png`,
		});
	});
});
