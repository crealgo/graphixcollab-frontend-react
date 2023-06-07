import { test, expect } from '@playwright/test';
import { paramCase } from 'change-case';

const devUrl = 'http://localhost:3000';

const pages = ['/', '/about', '/book-appointment', '/services'];

pages.forEach(path => {
	const pageName = path === '/' ? 'home' : path.replace('/', '');

	test(`${pageName} page`, async ({ page }, { project }) => {
		await page.goto(`${devUrl}${path}`, {
			waitUntil: 'domcontentloaded'
		});

		const projectName = paramCase(project.name);

		await page.screenshot({
			fullPage: true,
			path: `screenshots/full-page--${projectName}-${pageName}.png`
		});
	});
});
