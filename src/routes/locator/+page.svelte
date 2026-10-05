<script lang="ts">
	import { storeData, type StoreCityFilter } from '#lib';
	import StoreCard from '#lib/components/locator/StoreCard.svelte';
	import { toast } from '#lib';

	let activeCity = $state<StoreCityFilter>('all');
	let searchQuery = $state('');

	const cityTabs: { id: StoreCityFilter; label: string }[] = [
		{ id: 'all', label: `All Cities (${storeData.length})` },
		{ id: 'New York', label: 'New York' },
		{ id: 'Paris', label: 'Paris' },
		{ id: 'London', label: 'London' },
		{ id: 'Tokyo', label: 'Tokyo' },
		{ id: 'Los Angeles', label: 'Los Angeles' }
	];

	function selectCity(city: StoreCityFilter) {
		activeCity = city;
		searchQuery = '';
	}

	const filteredStores = $derived(
		storeData.filter((store) => {
			const matchesCity =
				activeCity === 'all' || store.city.toLowerCase() === activeCity.toLowerCase();
			if (!matchesCity) return false;

			const query = searchQuery.toLowerCase().trim();
			if (!query) return true;

			return (
				store.name.toLowerCase().includes(query) ||
				store.city.toLowerCase().includes(query) ||
				store.neighborhood.toLowerCase().includes(query) ||
				store.address.toLowerCase().includes(query)
			);
		})
	);
</script>

<svelte:head>
	<title>Wildflower — Store Locator | Find In Boutique</title>
</svelte:head>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Locator Header -->
	<div class="max-w-3xl mb-10">
		<span class="badge-stamp text-brand-olive font-semibold">Retail Boutique Network</span>
		<h1 class="font-serif text-4xl sm:text-6xl text-brand-charcoal mt-1">Find In Boutique</h1>
		<p class="text-sm text-brand-stone mt-2 font-light">
			Wildflower hats are fitted by hand. Search our authorized retail boutique partners below to
			schedule a fitting or browse current batch availability.
		</p>
	</div>

	<!-- Filter Controls & City Search -->
	<div
		class="bg-white p-4 sm:p-6 rounded-2xl border border-brand-lightstone/80 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
	>
		<!-- City Buttons -->
		<div class="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
			{#each cityTabs as tab}
				<button
					type="button"
					onclick={() => selectCity(tab.id)}
					class="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all {activeCity ===
					tab.id
						? 'bg-brand-charcoal text-white'
						: 'bg-brand-canvas text-brand-slate border border-brand-lightstone hover:border-brand-charcoal'}"
				>
					{tab.label}
				</button>
			{/each}
		</div>

		<!-- Search Input -->
		<div class="relative w-full md:w-72">
			<i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-brand-stone text-xs"></i>
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search city, neighborhood, or street..."
				class="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-brand-canvas border border-brand-lightstone focus:outline-none focus:border-brand-charcoal"
			/>
		</div>
	</div>

	<!-- Stores Layout: List & Map Aesthetic View -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
		<!-- Stores Cards Column -->
		<div class="lg:col-span-7 space-y-4">
			{#if filteredStores.length === 0}
				<div class="bg-white p-8 rounded-2xl text-center border border-brand-lightstone">
					<i class="fa-solid fa-map-location-dot text-3xl text-brand-stone mb-2"></i>
					<h4 class="font-serif text-xl text-brand-charcoal">No Boutiques Found</h4>
					<p class="text-xs text-brand-stone mt-1">
						Try another city filter or contact our concierge to schedule a fitting.
					</p>
				</div>
			{:else}
				{#each filteredStores as store (store.id)}
					<StoreCard {store} />
				{/each}
			{/if}
		</div>

		<!-- Atelier Visual Map / Experience Column -->
		<div class="lg:col-span-5">
			<div
				class="bg-brand-charcoal text-white rounded-2xl p-6 sm:p-8 border border-brand-slate sticky top-28 space-y-6"
			>
				<div class="flex items-center justify-between border-b border-brand-slate pb-4">
					<span class="badge-stamp text-brand-oliveLight">Boutique Fitting Experience</span>
					<span class="text-xs text-brand-lightstone">
						<i class="fa-solid fa-clock-rotate-left mr-1"></i> Complimentary
					</span>
				</div>

				<h3 class="font-serif text-2xl">What to expect at our partner ateliers</h3>

				<ul class="space-y-4 text-xs text-brand-lightstone font-light">
					<li class="flex items-start gap-3">
						<i class="fa-solid fa-ruler-combined text-brand-oliveLight mt-0.5"></i>
						<span>
							<strong>Calibrated Head Sizing:</strong> Milliners measure your cranium circumference and temple contour using brass calipers.
						</span>
					</li>
					<li class="flex items-start gap-3">
						<i class="fa-solid fa-wind text-brand-oliveLight mt-0.5"></i>
						<span>
							<strong>Steam Customization:</strong> Adjust the brim curvature or crown pinch on the spot using our tabletop steam boilers.
						</span>
					</li>
					<li class="flex items-start gap-3">
						<i class="fa-solid fa-feather-pointed text-brand-oliveLight mt-0.5"></i>
						<span>
							<strong>Upcycled Band Selection:</strong> Personalize your piece with vintage deadstock ribbons and vegetable-tanned ties.
						</span>
					</li>
				</ul>

				<div class="pt-4 border-t border-brand-slate">
					<p class="text-[11px] text-brand-lightstone">
						Looking to carry Wildflower in your boutique?
					</p>
					<button
						type="button"
						onclick={() =>
							toast.show(
								'Partner Inquiry',
								'Please dispatch your store portfolio to stockists@wildflowermillinery.com'
							)}
						class="mt-2 text-xs text-brand-chalk hover:text-brand-oliveLight font-semibold underline underline-offset-4"
					>
						Apply for Wholesale Curation &rarr;
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
