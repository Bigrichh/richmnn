/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'txtprim': 'var(--text-primary)',
				'txtsec': 'var(--text-secondary)',
				'bgprim': 'var(--bg-primary)',
				'bgsec': 'var(--bg-secondary)',
				'bddef': 'var(--border-default)',
				'bddar': 'var(--border-darker)',
			},
		},
	},
	plugins: [],
}
