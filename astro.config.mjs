// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.labs.vaultifyuk.co.uk',
	integrations: [
		starlight({
			title: 'VaultifyUK Labs',
			description: 'Documentation and knowledge base for VaultifyUK Labs products — Shopify tools, automation, and SaaS.',
			editLink: {
  				baseUrl: 'https://github.com/VaultifyUK/vaultifyuk-labs-docs/edit/main/'
			},
			logo: {
				src: './src/assets/logo.svg',
				alt: 'VaultifyUK Labs',
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			social: [],
			sidebar: [
				{
					label: 'Smart Collections',
					items: [
						{ label: 'Overview', slug: 'smart-collections/overview' },
						{ label: 'Getting Started', slug: 'smart-collections/getting-started' },
						{
							label: 'Collections',
							items: [
								{ label: 'Creating & Taking Over Collections', slug: 'smart-collections/creating-and-taking-over-collections' },
								{ label: 'Rule-Based Collections', slug: 'smart-collections/rule-based-collections' },
								{ label: 'Composed Collections', slug: 'smart-collections/composed-collections' },
							],
						},
						{ label: 'Product Pins', slug: 'smart-collections/product-pins' },
						{ label: 'Sorting & Automation', slug: 'smart-collections/sorting-and-automation' },
						{ label: 'Billing & Plans', slug: 'smart-collections/billing-and-plans' },
						{ label: 'Troubleshooting', slug: 'smart-collections/troubleshooting' },
						{ label: 'FAQ', slug: 'smart-collections/faq' },
					],
				},
			],
			pagination: true,
			lastUpdated: false,
		}),
	],
});
