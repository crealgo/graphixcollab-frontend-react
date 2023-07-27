import {defineConfig, devices} from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: '__tests__',
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'list',
	// timeout: 30000,
	use: {
		baseURL: 'http://127.0.0.1:3000',
		trace: 'on-first-retry',
		// actionTimeout: 5000
	},
	projects: [
		// {
		// 	name: 'desktop-edge',
		// 	use: { ...devices['Desktop Edge'] }
		// },
		{
			name: 'desktop-chrome',
			use: {...devices['Desktop Chrome']},
		},
		{
			name: 'desktop-firefox',
			use: {...devices['Desktop Firefox']},
		},
		{
			name: 'desktop-safari',
			use: {...devices['Desktop Safari']},
		},
		{
			name: 'android',
			use: {...devices['Pixel 5']},
		},
		{
			name: 'ios',
			use: {...devices['iPhone 12']},
		},
	],
	webServer: {
		command: 'npm run dev',
		url: 'http://127.0.0.1:3000',
		reuseExistingServer: true,
	},
});
