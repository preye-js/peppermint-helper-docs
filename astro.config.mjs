// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		starlight({
			title: 'My Docs',
			components: {
				Header: './src/components/Header.astro',
			},
			logo: {
				light: '/src/assets/peppermint-logo.svg',
				dark: '/src/assets/peppermint-logo-dark.svg',
				alt: 'Peppermint',
				replacesTitle: true,
			},
			customCss: ['./src/styles/tailwind.css', './src/styles/starlight-overrides.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Your Account',
					autogenerate: { directory: 'your-account' },
				},
				{
					label: 'Features',
					autogenerate: { directory: 'features' },
				},
			],
		}),
	],
});
