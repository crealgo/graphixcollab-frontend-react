import { test, expect } from '@playwright/test';
import { paramCase } from 'change-case';

const devUrl = 'http://localhost:3000/';

test('home page', async ({ page }, { project }) => {
	await page.goto(devUrl, {
		waitUntil: 'domcontentloaded'
	});

	const projectName = paramCase(project.name);

	console.log({ projectName });

	await page.screenshot({
		fullPage: true,
		path: `screenshots/full-page--${projectName}-home.png`
	});
});
