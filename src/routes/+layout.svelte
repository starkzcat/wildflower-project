<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import AnnouncementBar from '#lib/components/layout/AnnouncementBar.svelte';
	import Header from '#lib/components/layout/Header.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import Toast from '#lib/components/ui/Toast.svelte';
	import ProductModal from '#lib/components/catalogue/ProductModal.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col min-h-screen">
	<AnnouncementBar />
	<Header />

	<main id="app-container" class="flex-1">
		{@render children()}
	</main>

	<Footer />
	<Toast />
	<ProductModal />
</div>
