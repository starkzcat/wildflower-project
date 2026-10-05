<script lang="ts">
	import type { Store } from '#lib';
	import { toast } from '#lib';

	interface Props {
		store: Store;
	}

	let { store }: Props = $props();

	function handleDirections() {
		toast.show('Directions Dispatched', `Boutique transit guide sent for ${store.name}.`);
	}

	function handleBooking() {
		toast.show(
			'Fitting Concierge',
			`Fitting request logged for ${store.name}. An atelier stylist will confirm via email.`
		);
	}
</script>

<div
	class="bg-white p-6 rounded-2xl border border-brand-lightstone/80 hover:border-brand-charcoal transition-all shadow-sm"
>
	<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
		<div>
			<div class="flex items-center gap-2">
				<span class="badge-stamp text-brand-olive font-semibold">
					{store.city} &bull; {store.neighborhood}
				</span>
			</div>
			<h3 class="font-serif text-2xl text-brand-charcoal mt-1">{store.name}</h3>
		</div>
		<span
			class="inline-flex items-center text-[11px] text-brand-olive font-medium bg-brand-oliveMuted px-2.5 py-1 rounded-md border border-brand-olive/20 self-start"
		>
			{store.leadTime}
		</span>
	</div>

	<div
		class="mt-4 pt-4 border-t border-brand-chalk grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-slate font-light"
	>
		<div class="flex items-start gap-2">
			<i class="fa-solid fa-location-dot text-brand-stone mt-0.5"></i>
			<span>{store.address}</span>
		</div>
		<div class="flex items-start gap-2">
			<i class="fa-solid fa-phone text-brand-stone mt-0.5"></i>
			<span>{store.phone}</span>
		</div>
		<div class="col-span-full flex items-start gap-2 text-brand-stone">
			<i class="fa-solid fa-clock text-brand-stone mt-0.5"></i>
			<span>{store.hours}</span>
		</div>
	</div>

	<div class="mt-4 pt-3 border-t border-brand-chalk/60 flex items-center justify-between">
		<button
			type="button"
			onclick={handleDirections}
			class="text-xs font-semibold text-brand-charcoal hover:text-brand-olive transition-colors flex items-center gap-1.5"
		>
			<span>Get Directions</span>
			<i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
		</button>
		<button
			type="button"
			onclick={handleBooking}
			class="text-xs bg-brand-canvas hover:bg-brand-charcoal hover:text-white px-3.5 py-1.5 rounded-lg border border-brand-lightstone/80 text-brand-charcoal transition-all"
		>
			Book Custom Fitting
		</button>
	</div>
</div>
