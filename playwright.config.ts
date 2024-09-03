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
	snapshotDir: '__tests__/__snapshots__',
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	workers: 10,
	reporter: 'list',
	// timeout: 30000,
	use: {
		baseURL: 'http://127.0.0.1:3000',
		trace: 'on-first-retry',
		// actionTimeout: 5000
	},
	projects: [
		{
			name: 'desktop-safari',
			use: {...devices['Desktop Safari']},
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
