// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RoboCon Docs',
			social: {
				instagram: 'https://www.instagram.com/hillsroadrobocon/',
				twitter: 'https://twitter.com/HRobocon/',
				facebook: 'https://www.facebook.com/HRobocon/'
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Hardware',
					autogenerate: { directory: 'hardware' },
				},
				{
					label: 'Programming',
					autogenerate: { directory: 'programming' },
				},
				{
					label: 'Tools',
					autogenerate: { directory: 'tools' },
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
			],
		}),
	],
});
