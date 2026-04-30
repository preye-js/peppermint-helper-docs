/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/starlight" />

declare module 'virtual:starlight/components/*' {
	import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

	const Component: AstroComponentFactory;
	export default Component;
}
