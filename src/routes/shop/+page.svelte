<script lang="ts">
	import { catalogueData, type FilterCategory } from '#lib';
	import ProductCard from '#lib/components/catalogue/ProductCard.svelte';

	let activeFilter = $state<FilterCategory>('all');

	const filterTabs: { id: FilterCategory; label: string }[] = [
		{ id: 'all', label: `All Styles (${catalogueData.length})` },
		{ id: 'felt', label: 'Merino & Felt' },
		{ id: 'straw', label: 'Handwoven Straw' },
		{ id: 'caps', label: 'Heritage Caps' }
	];

	const filteredHats = $derived(
		activeFilter === 'all'
			? catalogueData
			: catalogueData.filter((hat) => hat.category === activeFilter)
	);
</script>

<svelte:head>
	<title>Wildflower — Digital Catalogue | Sustainable Modern Millinery</title>
</svelte:head>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Catalogue Header -->
	<div class="border-b border-brand-chalk pb-8 mb-8">
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
			<div>
				<span class="badge-stamp text-brand-olive font-semibold">
					Digital Lookbook &bull; Browse Only
				</span>
				<h1 class="font-serif text-4xl sm:text-6xl text-brand-charcoal mt-1">
					The Millinery Catalogue
				</h1>
				<p class="text-sm text-brand-stone max-w-2xl mt-2 font-light">
					In accordance with our anti-fast-fashion commitment, Wildflower hats are not sold via
					one-click anonymous checkouts. Explore their construction notes below, then use our store
					locator to try one on.
				</p>
			</div>

			<div
				class="bg-brand-oliveMuted border border-brand-olive/30 p-3 rounded-xl flex items-center gap-3 text-xs text-brand-olive"
			>
				<i class="fa-solid fa-circle-info text-base"></i>
				<span>All pieces available exclusively through authorized retail spaces.</span>
			</div>
		</div>

		<!-- Filter Tabs -->
		<div class="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
			{#each filterTabs as tab}
				<button
					type="button"
					onclick={() => (activeFilter = tab.id)}
					class="px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all {activeFilter ===
					tab.id
						? 'bg-brand-charcoal text-white'
						: 'bg-white text-brand-slate border border-brand-lightstone hover:border-brand-charcoal'}"
				>
					{tab.label}
				</button>
			{/each}
		</div>
	</div>

	<!-- Catalogue Product Cards Grid -->
	{#if filteredHats.length === 0}
		<div class="col-span-full text-center py-16">
			<i class="fa-solid fa-feather text-4xl text-brand-lightstone mb-3"></i>
			<h4 class="font-serif text-2xl text-brand-charcoal">No styles found in this category</h4>
			<p class="text-xs text-brand-stone mt-1">
				Please select another filter or check back during our next seasonal release.
			</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredHats as hat (hat.id)}
				<ProductCard {hat} compact={false} />
			{/each}
		</div>
	{/if}
</section>
